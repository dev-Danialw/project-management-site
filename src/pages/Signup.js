import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }
    if (selected.size > 100000) {
      setThumbnailError("Image file size must be less than 100kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center">
        <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
              Create An Account
            </h1>
            <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              Create an account to enjoy all the services without any ads for
              free!
            </p>
          </div>
          {/* input fields */}
          <div className="space-y-4">
            <input
              required
              type="email"
              placeholder="Email Addres"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            <input
              required
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            <input
              required
              type="text"
              placeholder="Display Name"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
          </div>
          {/* file upload */}
          <div className="flex items-center justify-center bg-grey-lighter">
            <label className="w-60 mt-8 flex flex-row items-center px-4 py-4 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:bg-slate-200">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="pl-4 text-base leading-normal">
                Profile Thumbnail
              </span>
              <input
                required
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
          {/* fileName */}
          {thumbnail && <p className="mt-4 ml-28">{thumbnail.name}</p>}

          {/* uploaded */}
          {thumbnail && (
            <div className="alert alert-success shadow-lg mt-4 justify-center">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Uploaded</span>
              </div>
            </div>
          )}

          {/* error */}
          {thumbnailError && (
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
                <span>{thumbnailError}</span>
              </div>
            </div>
          )}

          {/* submit btn */}
          {!isPending && (
            <div className="text-center mt-6">
              <button className="btn-outline py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">
                Sign Up
              </button>
            </div>
          )}

          {isPending && (
            <div className="text-center mt-6">
              <button
                className="btn-outline py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl"
                disabled
              >
                Loading...
              </button>
            </div>
          )}

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
      </div>
    </form>
  );
}

{
  /* <p className="mt-4 text-sm">
Already Have An Account?{" "}
<span className="underline cursor-pointer"> Sign In</span>
</p>  */
}
