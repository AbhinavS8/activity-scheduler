import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function Activity() {
    let { id } = useParams()
    const [activityObject, setActivityObject] = useState({});

    useEffect(() => {
        axios.get("http://localhost:3001/activities/byId/"+{id}).then((response) =>
        {   
            setActivityObject(response.data);
            console.log(response);
        })
    })
    return(<div>
        <div>id: {id}</div>
        <div>{activityObject.name} {activityObject.id}</div>
        </div>)
}

export default Activity