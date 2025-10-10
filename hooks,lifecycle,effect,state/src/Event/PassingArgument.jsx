
// ex-1

import { useState } from "react";

// const PassingArgument = () => {

//     const handleCLick = (name) => {
//         alert(`h1 ${name}`)
//     };

//     return  <button onClick={() => handleCLick("alice")}>CLICK</button>
// }

// export default PassingArgument;

// ex-2

// const PassingArgument = () => {

//     const [input, setInput] = useState("")

//     const handleCLick = () => {
//         alert(`h1 ${input}`)
//     }

//     return(

//        <>
//          <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>

//         <button onClick={handleCLick}>CLICK</button>    
//        </>
//     )
// }

// export default PassingArgument


// ex-3

const PassingArgument = ({name}) => {

    const handleCLick = (name) => {
        alert(`hi ${name}`)
    }
     
    return(
        <>
            <button onClick={()=>handleCLick(name)}>CLICK</button>
        </>
    )
} 

export default PassingArgument  