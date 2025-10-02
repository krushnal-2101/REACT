import { useState } from "react";


const State = () => {
    const [count, setCount] = useState(0)

    // const handClick = () => {
    //     setCount(count + 1)
    // }
     
    return (
        <>
            <h1>{count}</h1>
             {/* <button onClick={handClick}>CLICK</button> */}
             <button onClick={() => setCount(count+1)}>CLICK</button>
        </>
    )
}

export default State;