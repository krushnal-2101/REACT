import React, {useContext, useState} from "react";


const ExpenseContext = () => {
    const  [input, setInput ] = useState({
        title :"",
        amount:0,
        type:"debit", 
        category:"",
    })
}

const {add} = useContext(expenses)


