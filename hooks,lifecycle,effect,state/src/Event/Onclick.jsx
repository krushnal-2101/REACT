

import React from "react";

const Onclick = () => {

    const handleClick = () => [
        alert("onClick button click")
    ]
    
    return <button onClick={handleClick}>CLICK</button>
}

export default Onclick