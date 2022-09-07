import Temple from "../assets/temple.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar mb-20 px-0">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl px-0 border-none">
          <img src={Temple} alt="logo" className="w-8 h-8" />
          <span className="px-2">Work Space</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-1">
          <li className="mr-5">
            <Link to="/login">Login</Link>
          </li>
          <li className="mr-5">
            <Link to="/signup">Signup</Link>
          </li>
          <button className="btn btn-outline">Logout</button>
        </ul>
      </div>
    </div>
  );
}
