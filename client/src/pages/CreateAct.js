import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from "axios"
import "./CreateAct.css"

function CreateAct() {
    const initialValues = {
        name:"sigma",
        // start_time:"",
        // end_time:""
    }

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/activities", data).then((response) => {
            console.log(data);
        })
    }

    const validationSchema = Yup.object({
        name: Yup.string().required().min(1),
        // start_time: Yup.required(),
        // end_time: Yup.required()
    })


    return(
        <div className="createActivityPage">
            <Formik 
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                
                <Form>
                    <label>name: </label>
                    <ErrorMessage name="name" component="span"/>
                    <Field 
                    id="inputCreateActivity"
                    name="name"
                    placeholder="enter activity name"
                    />

                    {/* <label>start time: </label>
                    <ErrorMessage name="start_time" component="span"/>
                    <Field 
                    id="inputCreateActivity"
                    name="start_time"
                    />

                    <label>end time: </label>
                    <ErrorMessage name="end_time" component="span"/>
                    <Field 
                    id="inputCreateActivity"
                    name="end_time"
                    /> */}
                    <button type="submit">Create Activity</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreateAct