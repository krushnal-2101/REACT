import { Children, createContext, useState } from "react";

export const expenses = createContext({
    add: () => { },
    list: [],
    update: () => { },
    delete: () => { }
})

const ExpenseContext = ({ Children }) => {
    const initialState = [
        {
            id: 1,
            title: "burger",
            amount:"1000",
            category:"food",
            type:"debit"
        }
    ]


    const [data, setData] = useState(initialState);

    const add = (input) => {
       const newData= {
      id: new Date().getTime(),
      title: input.title,
      amount: input.amount,
      category: input.category,
      type: input.type,
       }
       setData ((prev) => [...prev, newData])
    }

    console.log("data", data)

    const value = {
        add, 
        list:data, 
    }
     return <expense.Provider value={value}>{Children}</expense.Provider>;
}
 export default ExpenseContext;
