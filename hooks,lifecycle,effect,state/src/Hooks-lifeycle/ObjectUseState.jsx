import { useState } from "react"
import  "./Object.css";

const ObjectUseState = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  })

  const [person, setPerson] = useState([])


  const handleInputData = (field, e) => {
    setInput((inputData) => {
      return {
        ...inputData,
        [field]: e.target.value,
      }
    })
  };


  const handleAdd = () => {
    setPerson((person) => [...person, input])
    setInput({ name: "", age: "", email: "", phone: "" })
  }

  console.log("person details:", person)
  return (

    <>
      <input type="text" value={input.name} placeholder="enter your name" onChange={(e) => handleInputData("name", e)}  className="input-1"/>
      <input type="number" value={input.age} placeholder="enter your age" onChange={(e) => handleInputData("age", e)}   className="input-1"/> 
      <input type="text" value={input.email} placeholder="enter your email" onChange={(e) => handleInputData("email", e)}   className="input-1"/>
      <input type="number" value={input.phone} placeholder="enter your phone" onChange={(e) => handleInputData("phone", e)}   className="input-1"/>

      <br />

      <button onClick={handleAdd}>CLICK ADD</button>

      <h1>name:{input.name}</h1>
      <br />
      <h1>age:{input.age}</h1>
      <br />
      <h1>email:{input.email}</h1>
      <br />
      <h1>phone:{input.phone}</h1>
      <br />


      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {person.map((user, index )=> {
          return(
          <>
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          </>
          )
        })}
        </tbody>
      </table>
    </>
  )
}

export default ObjectUseState;

