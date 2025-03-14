import "./Navbar.css"; 
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateAct from "./pages/CreateAct";
import Activity from "./pages/Activity";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/createactivity">Create Activity</Link>
          <Link to="/schedule">View Schedule</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createactivity" element={<CreateAct />} />
          <Route path="/activity/:id" element={<Activity />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
