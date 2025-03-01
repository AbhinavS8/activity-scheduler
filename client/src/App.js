import './App.css';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom'
import Home from "./pages/Home"
import CreateAct from "./pages/CreateAct"


function App() { //route structure

    return (
    <div>
    <Router>
      <Link to="/createactivity">goes to creating activity route!</Link>
      <Link to="/">goes to home!</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createactivity" element={<CreateAct />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
