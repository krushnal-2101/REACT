// import React from 'react';

const ObjectList = () => {
    const people = [
        {id:1, name:"alice", age:20, skill:"react"},
        {id:2, name:"bob", age:21, skill:"angular"},
        {id:3, name:"charlie", age:22, skill:"vue"},
        {id:4, name:"david", age:23, skill:"node"},
        {id:5, name:"eve", age:24, skill:"python"},
        {id:6, name:"frank", age:25, skill:"java"},
        {id:7, name:"grace", age:26, skill:"c++"},
        {id:8, name:"heidi", age:27, skill:"c#"},
        {id:9, name:"ivan", age:28, skill:"php"},
        {id:10, name:"judy", age:29, skill:"ruby"}
    ];  


return(

    <>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>skill</th>
                </tr>
            </thead>
            <tbody>
                {people.map((user, id) => {
                  return(
                      <>
                        <tr key={id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.skill}</td>
                        </tr>
                    </>
                  )
                })}
            </tbody>
        </table>
    </>
);
}

export default ObjectList;





















