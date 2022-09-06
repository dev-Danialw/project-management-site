import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setisPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setisPending(true);

    try {
      // sigup
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //   add display name to user
      await updateProfile(user, {
        displayName,
      });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: user });

      if (!user) {
        throw new Error("Could not complete signup");
      }

      setisPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setisPending(false);
    }
  };

  return { error, isPending, signup };
};
