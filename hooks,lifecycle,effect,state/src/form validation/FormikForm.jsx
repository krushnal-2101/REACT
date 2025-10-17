
import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import FormError from "./FormError";
import "./Formik.css"


const FormikForm = () => {
    const validationSchema = Yup.object({
        name: Yup.string().min(3, "Name must be at least 3 characters").max(50, "name can't be exceed more than 50 character").required("Name is required"),
        email: Yup.string().email("email is invalid").required("Email is required"),
        password: Yup.string().min(6, "password must be at least 6 characters").max(20, "password can't be exceed more than 20 character").required("password is required"),
        age: Yup.string().max(2, "age can't be exceed more than 2 character").required("age is requires"),
        confirmPassword: Yup.string().required("password is not same"),

    })

    return (

        <>
            <Formik initialValues={{
                name: "",
                email: "",
                age: "",
                password: "",
                confirmPassword: "",

            }}
                validationSchema={validationSchema}
                ondSubmit={(values, { resetForm }) => {
                    console.log("form data", values)
                    resetForm();
                }}
            >

                <Form>
                    <label htmlFor="name">NAME</label>
                    <Field name="name" type="text" />
                    <FormError name="name" />

                    <label htmlFor="email">EMAIL</label>
                    <Field name="email" type="email" />
                    <FormError name="email" />

                    <label htmlFor="age">AGE</label>
                    <Field name="age" type="number" />
                    <FormError name="age" />

                    <label htmlFor="password">PASSWORD</label>
                    <Field name="password" type="password" />
                    <FormError name="password" />

                    <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
                    <Field name="confirmPassword" type="confirmPassword" />
                    <FormError  name="confirmPassword"/>


                    <button type="submit">SUBMIT</button>
                </Form>
            </Formik>
        </>
    )
}

export default FormikForm


