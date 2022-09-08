import { useCollection } from "../hooks/useCollection";
import Avatar from "./Avatar";

export default function OnlineUsers() {
  const { error, documents } = useCollection("users");

  return (
    <div className="flex flex-col items-center w-60 min-w-60 pt-6 box-border bg-white font-bold">
      <h2 className="border-b-2 text-right w-44 pb-2 mb-2">All Users</h2>
      {documents &&
        documents.map((user) => {
          const onlineStatus = user.online ? "online" : null;
          return (
            <div key={user.id} className="stat flex items-center justify-end">
              <div className="stat-title">{user.displayName}</div>
              <div className={`avatar ${onlineStatus}`}>
                <Avatar src={user.photoURL} />
              </div>
            </div>
          );
        })}

      {error && (
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
            <span>{error}</span>
          </div>
        </div>
      )}
    </div>
  );
}
