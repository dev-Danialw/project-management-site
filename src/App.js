import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Project from "./pages/Project";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import OnlineUsers from "./components/OnlineUsers";

const App = () => {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="flex">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="flex-grow pt-0 px-8 bg-slate-50 h-screen">
            <Nav />
            <Routes>
              <Route
                exact
                path="/"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route
                exact
                path="/create"
                element={user ? <Create /> : <Navigate to="/login" />}
              />
              <Route
                exact
                path="/project"
                element={user ? <Project /> : <Navigate to="/login" />}
              />
              <Route
                exact
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                exact
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
