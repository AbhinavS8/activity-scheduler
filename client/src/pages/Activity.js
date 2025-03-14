import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Activity.css"; // Import CSS

function Activity() {
    let { id } = useParams();
    const [activityObject, setActivityObject] = useState({});
    const navigate = useNavigate();

    const deleteAct = (id) => {
        axios.delete(`http://localhost:3001/activities/${id}`)
            .then(() => {
                console.log(`Deleted activity with ID ${id}`);
                navigate(-1);
            })
            
    };

    useEffect(() => {
        axios.get(`http://localhost:3001/activities/byId/${id}`).then((response) => {
            setActivityObject(response.data);
        });
    }, []);

    return (
        <div className="activity-container">
            <div className="activity-box">
                <div className="activity-title">{activityObject.name}</div>
                <div className="activity-description">
                    <div>Streak: {activityObject.streak} </div>
                    <div> {activityObject.start_time} - {activityObject.end_time}</div>
                    <div> {activityObject.status}</div>
                    <button onClick={() => deleteAct(activityObject.id)}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Activity;
