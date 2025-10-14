
import React, { useState } from "react";

const WorkingForms = () => {
    const [formData, setFormData] = useState({
        task:"",
        description:"",
    })

    const [saveFormData, setSaveFormData] = useState([])

    const handleChange = (key, e) => {
        setFormData((formData) => {
            return{
                ...formData,
                [key] : e.target.value
            }
        })
    }

    const handleSubmitData =(e) => {
        e.preventdefault();

        setSaveFormData((data) => [...data, ...formData])
        setFormData({task: "", description:""})
    }

    console.log(saveFormData);


    return(
        <>
            <form onSubmit={handleSubmitData}>
                <input type="text" placeholder="task" value={formData.task} onChange={(e) => handleChange("task", e)}/>
                <br /><br />    
                <input type="text" placeholder="description" value={formData.description} onChange={(e) => handleChange("description", e)}/>
                <button type="submit">SUBMIT</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>TASK</th>
                        <th>DESCRIPTION</th>
                    </tr>
                </thead>
                <tbody>
                    {saveFormData.map((data, index)=> {
                        return(
                          <>
                            
                          </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default WorkingForms;