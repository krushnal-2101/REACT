
import { useEffect, useState } from "react";

import axios from "axios";


const UseEffect = () => {

    const [person, setPerson] = useState([])

    const [fetchData, setFetchData] =   useState(false)

    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const response = await axios(
                     "https://jsonplaceholder.typicode.com/users"
                );
                if (!response.data || response.data.length === 0){
                    console.log("not data found")
                    setPerson([])
                }
                setPerson(response.data)
            } catch(error){
                console.log(massage.error)
            }
        }

        if (fetchData) {
            fetchUserData()
        }
    }, [fetchData])

    const handleFetch = () => {
        setFetchData(true)
    }

    return (
        <>
            <button onClick={handleFetch}>FETCH DATA</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {person.map((person) => {
                        return (
                            <>
                                <tr key={person.id}>
                                    <td>{person.id}</td>
                                    <td>{person.name}</td>
                                    <td>{person.username}</td>
                                    <td>{person.email}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default UseEffect;