import Temple from "../assets/temple.svg";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Nav() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="flex flex-row navbar mb-20 px-0 w-full">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl px-0 border-none">
          <img src={Temple} alt="logo" className="w-8 h-8" />
          <span className="px-2">Work Space</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-1">
          {!user && (
            <>
              <li className="mr-5">
                <Link to="/login">Login</Link>
              </li>
              <li className="mr-5">
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}

          {user && (
            <li>
              {!isPending && (
                <button className="btn btn-outline" onClick={logout}>
                  Logout
                </button>
              )}

              {isPending && (
                <button className="btn btn-outline" disabled>
                  Logging out...
                </button>
              )}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
