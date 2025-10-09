
import React, { useState } from "react";

const Onsubmit = () => {

    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
    }

    return (

        <>
            <form OnsSubmit={handleSubmit}>
                <label htmlFor="name">name</label>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />

                <br />

                <button type="submit">SUBMIT</button>
            </form>
        </>
    )
}

export default Onsubmit