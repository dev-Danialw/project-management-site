import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

export const useDocument = (doc_collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = doc(db, doc_collection, id);
    const unsub = onSnapshot(
      ref,
      (doc) => {
        if (doc.data()) {
          setDocument({ ...doc.data(), id: doc.id });
          setError(null);
        } else {
          setError("No such project available");
        }
      },
      (err) => {
        console.log(err.message);
        setError("failed to get document");
      }
    );
    return () => unsub();
  }, [doc_collection, id]);

  return { document, error };
};
