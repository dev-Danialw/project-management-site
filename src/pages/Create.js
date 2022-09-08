import { useState, useEffect } from "react";
import { useCollection } from "../hooks/useCollection";
import Select from "react-select";
import makeAnimated from "react-select/animated";
// import { AuthContext } from "../context/AuthContext";
// import { Navigate } from "react-router-dom";

const animatedComponents = makeAnimated();
const categories = [
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

export default function Create() {
  const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);

  // form field values
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  // create user values for react-select
  useEffect(() => {
    if (documents) {
      setUsers(
        documents.map((user) => {
          return { value: { ...user, id: user.id }, label: user.displayName };
        })
      );
    }
  }, [documents]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Please select a project category.");
      return;
    }
    if (assignedUsers.length < 1) {
      setFormError("Please assign the project to at least 1 user");
      return;
    }

    console.log(name, details, dueDate, category.value, assignedUsers);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center"
    >
      <div className="form-control w-full max-w-xl ">
        {/* name */}
        <label className="label label-text">Project Name:</label>
        <input
          className="input input-bordered"
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        {/* Details */}
        <label className="label label-text">Project Details</label>
        <textarea
          className="textarea textarea-bordered h-24"
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          required
        ></textarea>

        {/*due date */}
        <label className="label label-text">Due Date:</label>
        <input
          className="input input-bordered "
          required
          type="date"
          onChange={(e) => setDueDate(e.target.value)}
          value={dueDate}
        />

        {/* project catagory */}
        <label className="label label-text">Project Catagory:</label>
        <Select
          onChange={(option) => setCategory(option)}
          options={categories}
        />
        {/* Asignee */}
        <label className="label label-text">Assign To:</label>
        <Select
          onChange={(option) => setAssignedUsers(option)}
          options={users}
          isMulti
          components={animatedComponents}
        />
      </div>

      <button className="btn btn-outline mt-4 w-32">Add Project</button>

      {/* error */}
      {formError && (
        <div className="alert alert-error shadow-lg mt-4 justify-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{formError}</span>
          </div>
        </div>
      )}
    </form>
  );
}
