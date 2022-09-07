import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="drawer w-72 h-screen">
      <ul className="menu overflow-y-auto bg-indigo-400 min-h-full relative text-white ">
        {/* <!-- Sidebar content here --> */}
        <div className="avatar placeholder flex-col justify-center items-center w-full px-7 py-8 border-b-2 border-y-gray-500 text-center font-bold box-border">
          {/* avatar */}
          <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
            <span className="text-3xl">K</span>
          </div>
          <p>Hey User</p>
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
            <NavLink to="/create">
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
