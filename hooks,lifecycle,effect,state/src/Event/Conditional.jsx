// ex-1

// import React, { useState } from "react";


// const Conditional = () => {

//     const [isLoggedIn, setIsLoggedIn] = useState(false)

//     return (

//         <>
//             <h1>{isLoggedIn ? "welcome" :"click to login"}</h1>

//             <button onClick={()=> setIsLoggedIn(!isLoggedIn)}>
//                 {isLoggedIn ? "logout" : "login"}
//             </button>
//         </>
//     )
// }

// export default Conditional



// ex-2

import React, { useState } from "react";

const Conditional = () => {

    const [color, setColor] = useState("white") 

    let content

    if(color === "green")
    {
       content = (
         <h1 style={{color:"green"}}>you have selected green color</h1>
       )
    }else if (color ==="blue")
    {
       content = (
         <h1 style={{color:"blue"}}>you have selected blue color</h1>
       )
    }else if (color ==="pink")
    {
       content = (
         <h1 style={{color:"pink"}}>you have selected pink color</h1>
       )
    }else if (color ==="yellow")
    {
       content = (
         <h1 style={{color:"yellow"}}>you have selected yellow color</h1>
       )
    }else if (color ==="gray")
    {
       content = (
         <h1 style={{color:"gray"}}>you have selected gray color</h1>
       )
    }else {
        content = (
            <h1 style={{color:"red"}}>select other color only you can set color select......!!!!! </h1>
        )
    }

    return<>{content}</>

}

export default Conditional