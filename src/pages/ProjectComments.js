import { useState } from "react";
import { timestamp } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";

export default function ProjectComments() {
  const { user } = useAuthContext();
  const [newComment, setNewComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };
    console.log(commentToAdd);
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
