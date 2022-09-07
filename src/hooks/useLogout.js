import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { doc, setDoc, updateDoc } from "firebase/firestore";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setisPending] = useState(false);
  const { dispatch, user } = useAuthContext();

  const logout = async () => {
    setError(null);
    setisPending(true);

    try {
      // updating online status
      const { uid } = user;
      await updateDoc(doc(db, "users", uid), {
        online: false,
      });

      // logging out
      await signOut(auth);
      setisPending(false);

      // dispatching logout
      dispatch({ type: "LOGOUT" });

      if (!isCancelled) {
        setisPending(false);
        setError(null);
      }
    } catch (error) {
      if (!isCancelled) {
        setError(error.message);
        setisPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  });
  return { logout, error, isPending };
};
