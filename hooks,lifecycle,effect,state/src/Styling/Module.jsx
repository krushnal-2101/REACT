
import React from "react";

import skill from "./ModuleType.module.css";


const Module = () => {

    return (
        <>
            <form>
                <input className={skill.input} type="email" placeholder="ENTER YOUR EMAIL" />
                <input className={skill.input} type="password" placeholder="ENTER YOUR PASSSWORD" />
                <button className={skill.btn}>LOGIN</button>
            </form>
        </>
    )
}

export default Module;



