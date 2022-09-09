import Avatar from "../components/Avatar";

export default function ProjectSummary({ project }) {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body pt-7 pb-1 px-5 ">
          <h4 className="card-title">{project.name}</h4>
          <p className="font-semibold">
            Due by {project.dueDate.toDate().toDateString()}
          </p>

          <p className="py-4 text-gray-500">{project.details}</p>

          <div>
            <h4 className="font-semibold pb-1">Project is assigned to:</h4>
            <ul className="card-actions justify-start mt-2">
              {project.assignedUsersList.map((user) => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
