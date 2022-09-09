import Avatar from "../components/Avatar";
import { useFirestore } from "../hooks/useFirestore";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function ProjectSummary({ project }) {
  const { user } = useAuthContext();
  let navigate = useNavigate();
  const { deleteDocument } = useFirestore("projects");

  const handleClick = (e) => {
    deleteDocument(project.id);
    navigate("/");
  };

  return (
    <>
      <div className="card w-auto bg-base-100 shadow-xl">
        <div className="card-body pt-7 pb-1 px-5 ">
          <h4 className="card-title">{project.name}</h4>
          <p className="font-medium text-slate-400">
            By {project.createdBy.displayName}
          </p>
          <p className="font-semibold">
            Due by {project.dueDate.toDate().toDateString()}
          </p>

          <p className="py-4 text-gray-500">{project.details}</p>

          <div>
            <h4 className="font-semibold pb-1 text-slate-400">
              Project is assigned to:
            </h4>
            <ul className="card-actions justify-start mt-2">
              {project.assignedUsersList.map((user) => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
          {user.uid === project.createdBy.id && (
            <div className="card-actions justify-end">
              <button className="btn btn-ghost mb-2" onClick={handleClick}>
                Mark as Complete
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
