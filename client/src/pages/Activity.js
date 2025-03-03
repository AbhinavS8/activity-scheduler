import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Activity.css"; // Import CSS

function Activity() {
    let { id } = useParams();
    const [activityObject, setActivityObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/activities/byId/${id}`).then((response) => {
            setActivityObject(response.data);
        });
    }, []);

    return (
        <div className="activity-container">
            <div className="activity-box">
                <div className="activity-title">{activityObject.name}</div>
                <div className="activity-description">ID: {activityObject.id}</div>
            </div>
        </div>
    );
}

export default Activity;
