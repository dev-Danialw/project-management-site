import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { doc, updateDoc } from "firebase/firestore";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setisPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setisPending(true);

    try {
      // logging in
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      // updating online status
      const { uid } = user;
      await updateDoc(doc(db, "users", uid), {
        online: true,
      });

      await // dispatching logout
      dispatch({ type: "LOGIN", payload: user });

      if (!isCancelled) {
        setisPending(false);
        setError(null);
      }
      setisPending(false);
    } catch (error) {
      setError(error.message);
      setisPending(false);
      if (!isCancelled) {
        setError(error.message);
        setisPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  });
  return { login, error, isPending };
};
