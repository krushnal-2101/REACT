import React from "react";


const List = () => {
    const Vegetables = [
        "Carrot",
        "Broccoli",
        "Spinach",
        "Potato",
        "Tomato",
        "Cucumber",
        "Cauliflower",
        "Eggplant",
        "Lettuce",
        "Onion"
    ]

    return(
        <>
        {Vegetables.map((Vegetable, index) => {
            return(
                <>
                    <h1 key={index}>{Vegetable}</h1>
                </>
            )
        })}
        </>
    )
}

export default List;    