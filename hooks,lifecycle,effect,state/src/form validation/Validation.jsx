import { useState } from "react";

const Validation = () => {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [error, setErrors] = useState({});

    const handleInputData = (key, e) => {
        setInputData((data) => {
            return {
                ...data,
                [key]: e.target.value,
            }
        })
    }

    const validate = () => {
        const newErrors = {}

        if (!inputData.name.trim()) {
            newErrors.name = "Name is required" 
        }
        if (!inputData.email.includes("@")) {
            newErrors.email = "Email is not valid"
        }
        if (inputData.password.length < 6) {
            newErrors.password = "password must be at least 6 characters"
        }

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validateErrors = validate();
         console.log("validate", validateErrors)    ;

        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors);

            return;
        }
        console.log("Form submitted successfully", inputData);
    }

    return (

        <>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="ENTER YOUR NAME" value={inputData.name} onChange={(e) => handleInputData("name", e)} />
                {error.name && <p style={{ color: "red" }}>{error.name}</p>}

                <input type="email" placeholder="ENTER YOUR EMAIL" value={inputData.email} onChange={(e) => handleInputData("email", e)} />
                {error.email && <p style={{ color: "red" }}>{error.email}</p>}

                <input type="password" placeholder="ENTER YOUR PASSWORD" value={inputData.password} onChange={(e) => handleInputData("password", e)} />
                {error.password && <p style={{ color: "red" }}>{error.password}</p>}

                <button type="submit">SUBMIT</button>
            </form>
        </>
    )
}

export default Validation;