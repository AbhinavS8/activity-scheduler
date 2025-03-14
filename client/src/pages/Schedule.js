import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Schedule() {
    const [listActivities, setNewList] = useState([]);
    
    const navigate = useNavigate()
    
    useEffect(() =>{
        axios.get("http://localhost:3001/activities/schedule").then((response) => {
            console.log(response)
            setNewList(response.data);

            
        })
    },[]);
    return (<div>
        {listActivities.map((value, key) => {

return (<div className='activity' onClick={() =>
        navigate(`/activity/${value.id}`)
        }>
        <div>{value.name} id: {value.id}</div>
        </div>
        );
        })}
    </div>) 
}

export default Schedule;