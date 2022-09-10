import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function ProjectList({ projects }) {
  return (
    <div className="grid gap-4 md:grid-cols-3 items-center pb-20 ">
      {projects.length === 0 && <p>No Projects yet!</p>}
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <div className="card w-auto bg-base-100 shadow-xl">
            <div className="card-body pt-5 pb-1 px-5 ">
              <h4 className="card-title">{project.name}</h4>
              <p>Due by {project.dueDate.toDate().toDateString()}</p>
              <div>
                <ul className="card-actions justify-start mt-2">
                  {project.assignedUsersList.map((user) => (
                    <li key={user.photoURL} className="pr-2">
                      <Avatar src={user.photoURL} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
