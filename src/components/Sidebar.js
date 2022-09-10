import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";
import Avatar from "./Avatar";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Sidebar() {
  const { user } = useAuthContext();

  return (
    <>
      {/* SideBar */}
      <div className={`w-72 h-screen hidden md:block`}>
        <ul className="menu overflow-y-auto bg-indigo-400 min-h-full relative text-white ">
          {/* <!-- Sidebar content here --> */}
          {/* avatar */}
          <div className="mx-6 py-6 border-b-2 border-b-slate-300 text-center font-bold box-border inline-block">
            <Avatar src={user.photoURL} />
            <p>Hey {user.displayName}</p>
          </div>

          {/* Links */}
          {/* dashboard btn */}
          <ul className="menu menu-vertical p-1 mt-12 pl-5 pr-0 w-full">
            <NavLink exact="true" to="/">
              <button className="btn btn-outline glass  rounded-l-3xl rounded-r-none pr-36 w-full">
                <div className="flex items-center">
                  <img
                    src={DashboardIcon}
                    alt="dashboard icon"
                    className="px-2"
                  />
                  <span>Dashboard</span>
                </div>
              </button>
            </NavLink>
            {/* create project btn */}
            <NavLink exact="true" to="/create">
              <button className="btn btn-outline glass mt-3 rounded-l-3xl rounded-r-none pr-28 w-full">
                <div className="flex items-center">
                  <img src={AddIcon} alt="add icon" className="px-2" />
                  <span>New Project</span>
                </div>
              </button>
            </NavLink>
          </ul>
        </ul>
      </div>

      {/* Bottom Nav */}
      <div className="btm-nav md:hidden z-50">
        <NavLink exact="true" to="/">
          <button className="active flex flex-col justify-center items-center">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <span className="btm-nav-label">Dashboard</span>
          </button>
        </NavLink>

        <NavLink exact="true" to="/create">
          <button className="active flex flex-col justify-center items-center">
            <svg
              className="w-6 h-6 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="btm-nav-label">Create</span>
          </button>
        </NavLink>
      </div>
    </>
  );
}
