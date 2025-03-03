import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function Activity() {
    let { id } = useParams()
    const [activityObject, setActivityObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/activities/byId/${id}`).then((response) =>
        {
            setActivityObject(response.data);
        })
    }, [])
    return(<div>{activityObject.name}</div>)
}

export default Activity