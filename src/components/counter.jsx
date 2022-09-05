import React from "react";

const Counter = () => {
    const count = 0
    const x = <h1>empty</h1>
    const formatCount = () => {
        return count === 0 ? x : count
    }
    return (
        <>
            <span>{formatCount()}</span>
            <button>+</button>
        </>
    )
}

export default Counter