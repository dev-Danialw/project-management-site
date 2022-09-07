import { useState } from "react";
import { auth, db, fbstorage } from "../firebase/config";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  uploadBytes,
} from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setisPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setisPending(true);

    try {
      // sigup
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // file reference
      const uploadRef = ref(
        fbstorage,
        `thumbnails/${user.uid}/${thumbnail.name}`
      );
      const imageRef = await uploadBytes(uploadRef, thumbnail);
      // get the file url from Firebase stoprage
      const image = await getDownloadURL(imageRef.ref);

      //  add display name & photo to user
      await updateProfile(user, {
        displayName,
        photoURL: image,
      });

      // ceate user document
      await setDoc(doc(db, "users", user.uid), {
        online: true,
        displayName,
        photoURL: image,
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
