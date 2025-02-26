import React from 'react'
import axios from "axios";
import {useEffect, useState} from "react";

function Home() {
  
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

export default Home;