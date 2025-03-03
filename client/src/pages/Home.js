import React from 'react'
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"
import "./Home.css"

function Home() {
  
    const [listActivities, setNewList] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
      axios.get("http://localhost:3001/activities").then((response) => {
        // console.log(response);
        setNewList(response.data);
      })
    }, []);

    return (<div className="App">

      {listActivities.map((value, key) => {

        return (<div className='activity' onClick={() =>
          navigate(`/activity/${value.id}`)
          }>
        <div>{value.name} id: {value.id}</div>
      </div>
      );
      })}
    
    </div>
  );
}

export default Home;