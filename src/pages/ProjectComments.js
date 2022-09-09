import { useState } from "react";
import { timestamp } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFirestore } from "../hooks/useFirestore";

export default function ProjectComments({ project }) {
  const { user } = useAuthContext();
  const [newComment, setNewComment] = useState("");
  const { updateDocument, response } = useFirestore("projects");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    await updateDocument(project.id, {
      comments: [...project.comments, commentToAdd],
    });
    if (!response.error) {
      setNewComment("");
    }
    if (response.error) {
      console.log(response.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-control flex flex-col">
      <label className="label">
        <span className="label-text">Comments</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-24"
        required
        onChange={(e) => setNewComment(e.target.value)}
        value={newComment}
      ></textarea>
      <button className="btn w-36 mt-4">Add Comment</button>
    </form>
  );
}
