import './App.css';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom'
import Home from "./pages/Home"
import CreateAct from "./pages/CreateAct"
import Activity from "./pages/Activity"


function App() { //route structure

    return (
    <div>
    <Router>
      <Link to="/createactivity">goes to creating activity route!</Link>
      <Link to="/">goes to home!</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createactivity" element={<CreateAct />} />
        <Route path="/activity/:id" element={<Activity />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
