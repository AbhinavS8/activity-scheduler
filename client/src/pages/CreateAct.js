import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from "axios"
import "./CreateAct.css"

function CreateAct() {
    const initialValues = {
        name:"",
        streak:0,
        start_time:"",
        end_time:"",
        status:"to do"
    }

    const onSubmit = (data, {resetForm}) => {
        axios.post("http://localhost:3001/activities", data).then((response) => {
            console.log(data);
            resetForm();
        })
    }

    const validationSchema = Yup.object({
        name: Yup.string().required().min(1),
        streak: Yup.number().required(),
        start_time: Yup.string()
        .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:mm)")
        .required("Time is required"),
        end_time: Yup.string()
        .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:mm)")
        .required("Time is required"),
        status: Yup.string(),
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

                    <label>streak: </label>
                    <ErrorMessage name="streak" component="span"/>
                    <Field 
                    id="inputCreateActivity"
                    name="streak"
                    placeholder="enter streak"
                    />

                    <label>start time: </label>
                    <ErrorMessage name="start_time" component="span"/>
                    <Field 
                    id="inputCreateActivity"
                    name="start_time"
                    placeholder="(HH:mm)"
                    />

                    <label>end time: </label>
                    <ErrorMessage name="end_time" component="span"/>
                    <Field 
                    id="inputCreateActivity"
                    name="end_time"
                    placeholder="(HH:mm)"
                    />

                    <label>status: </label>
                    <ErrorMessage name="status" component="span"/>
                    <Field 
                    id="inputCreateActivity"
                    name="status"
                    placeholder="enter status"
                    />


                    <button type="submit">Create Activity</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreateAct