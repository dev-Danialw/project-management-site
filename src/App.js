import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Project from "./pages/Project";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <BrowserRouter>
        <Sidebar />
        <div className="flex-grow pt-0 px-14">
          <Nav />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/project" element={<Project />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
