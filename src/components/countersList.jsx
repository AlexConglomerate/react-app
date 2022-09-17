import React from "react";
import Counter from "./counter";

const CountersList = () => {
    const counters = [
        {id: 0, value: 0, name: "iPhone"},
        {id: 1, value: 4, name: "Apple"},
        {id: 2, value: 0, name: "Tennis"},
        {id: 3, value: 0, name: "WebStorm"},
        {id: 4, value: 0, name: "Uzbekistan"}
    ]
    return <>
        {counters.map(count => (
            <Counter key={count.id} value={count.value} name={count.name}>
                {/*<span>{count.name}</span>*/}
            </Counter>
        ))}
    </>
}

export default CountersList