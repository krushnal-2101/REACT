import { useState } from "react";

const Counter = () => {
  const [counter, setCounter, ] = useState(0)
  const [input, setInput, ] = useState(0)

  const handleInput = (e) => {
      setInput(Number(e.target.value))
  }
  return(
    <>
   <div style={{textAlign:"center", marginTop:"100px", backgroundColor:"black", color:"white", padding:"50px"}}>
    <h1>Counter Project</h1>
      <input type="number" value={input} onChange={handleInput} style={{padding:"10px"}} /> 
        <h1>{counter}</h1>
        <br />
       <button onClick={() => setCounter(counter - input)} style={{padding:"10px", margin:"10px", backgroundColor:"gray",}}>DECREMENT</button>
       <button onClick={() => setCounter (counter + input)} style={{padding:"10px", margin:"10px", backgroundColor:"gray",}}>INCREMENT</button>
       <button onClick={() => setCounter (0)} style={{padding:"10px", margin:"10px", backgroundColor:"gray",}}>RESET</button>
   </div>
    </>
  )
}
export default Counter;