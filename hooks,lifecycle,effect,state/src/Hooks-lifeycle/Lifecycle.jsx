import React, { useEffect, useState} from "react"


const Lifecycle = () => {
    const [ count, setCount] = useState(0)

    useEffect(() => {
        console.log("component Mounted");

        return () => {
            console.log("component will unmount")
        }
    }, [])

    useEffect(() => {
        console.log("component updated - count changed: ", count)
    }, [count])

    return (
        <>
            <h1>counter: {count}</h1>
            <button onClick={() => setCount((prev) =>  prev + 1)}>increment</button>
        </>
    )
};


export default Lifecycle;