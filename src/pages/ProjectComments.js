import { useState } from "react";
import Avatar from "../components/Avatar";
import { timestamp } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFirestore } from "../hooks/useFirestore";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

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
    <>
      <div>
        <h4 className="font-medium mb-4">Project Comments</h4>
        {/* comments */}
        {project.comments.length > 0 &&
          project.comments.map((comment) => (
            <div
              key={comment.id}
              className="card min-w-fit bg-base-100 shadow-xl mb-4"
            >
              <div className="card-body p-4 ">
                <div className="avatar gap-2">
                  <Avatar src={comment.photoURL} />
                  <h2 className="px-2 card-title">{comment.displayName}</h2>
                </div>
                <p className="text-sm text-gray-400">
                  {formatDistanceToNow(comment.createdAt.toDate(), {
                    addSuffix: true,
                  })}
                </p>
                <p className="font-semibold text-slate-400">
                  {comment.content}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* add comment */}
      <form onSubmit={handleSubmit} className="form-control flex flex-col">
        <label className="label">
          <span className="label-text">Add Comment</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          required
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
        ></textarea>
        <button className="btn w-36 mt-4">Add Comment</button>
      </form>
    </>
  );
}
