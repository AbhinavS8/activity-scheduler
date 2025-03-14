import axios from "axios";

const deleteAct = (id) => {
    actId=req.params.id
    axios.delete(`http://localhost:3001/activities/${actId}`)
        .then(() => {
            console.log(`Deleted activity with ID ${actId}`);
        })
        
};

// export default deleteAct