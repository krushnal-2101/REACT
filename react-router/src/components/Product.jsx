import React from "react";
import { useParams } from "react-router-dom"

const Products = () => {
    const { id } = useParams()

    return(
        <div>
            <h1>this is product- {id}</h1>
        </div>
    )
}

export default Products