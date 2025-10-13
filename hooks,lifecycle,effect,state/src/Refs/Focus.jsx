
import React, {useRef} from "react";

const Focus = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }   
    
    return(
        <>
            <input type="text" ref={inputRef} />

            <button onClick={handleClick}>CLICK TO FOCUS</button>
        </>
    )
}


export default Focus;