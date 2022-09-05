import React from "react";

const Counter = () => {
    const count = 0
    const formatCount = () => {
        return count === 0 ? "empty" : count
    }
    const imageUrl = "https://picsum.photos/200"
    return (
        <>
            <img src={imageUrl} alt="image"/>

            <span className="badge bg-primary m-2">{formatCount()}</span>
            <button className='btn bg-primary btn-sm m-2' >+</button>
        </>
    )
}

export default Counter