import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
  
    const [listActivities, setNewList] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:3001/activities").then((response) => {
        // console.log(response);
        setNewList(response.data);
      })
    }, []);

    return (<div className="App">
      {listActivities.map((value, key) => {
        return (<div>{value.name}</div>);
      })}
    
    </div>
  );
}

export default App;
