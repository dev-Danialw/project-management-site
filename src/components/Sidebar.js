import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";
import Avatar from "./Avatar";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Sidebar() {
  const { user } = useAuthContext();

  return (
    <div className="drawer w-72  h-screen">
      <ul className="menu overflow-y-auto bg-indigo-400 min-h-full relative text-white ">
        {/* <!-- Sidebar content here --> */}
        {/* avatar */}
        <div className="mx-6 py-6 border-b-2 border-b-slate-300 text-center font-bold box-border inline-block">
          <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p>
        </div>

        {/* Links */}
        <ul className="menu menu-vertical p-1 mt-12 pl-5 pr-0 w-full">
          <li className="glass rounded-l-3xl rounded-r-none">
            <NavLink exact="true" to="/">
              <div className="flex flex-row gap-4">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </div>
            </NavLink>
          </li>
          <li className="glass mt-3 rounded-l-3xl rounded-r-none">
            <NavLink to="/create" className="font-bold">
              <div className="flex flex-row gap-4">
                <img src={AddIcon} alt="add icon" />
                <span>New Project</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </ul>
    </div>
  );
}
