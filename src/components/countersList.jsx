import React, {useState} from "react";
import Counter from "./counter";


const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: "iPhone"},
        {id: 1, value: 4, name: "Apple"},
        {id: 2, value: 0, name: "Tennis"},
        {id: 3, value: 0, name: "WebStorm"},
        {id: 4, value: 0, name: "Uzbekistan"}
    ]

    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        const newCounters = counters.filter(i => i.id != id)
        setCounters(newCounters)
    }

    const changeValue = (id, number) => {
        const updateArr = counters.map(i => {
            if (i.id === id) i.value += number
            return i
        })
        setCounters(updateArr)
    }

    const onIncrement = (id) => changeValue(id, +1)
    const onDecrement = (id) => changeValue(id, -1)
    const handleReset = () => setCounters(initialState)


    return <>
        {counters.map(count => (
            <Counter
                key={count.id}
                {...count}
                onDelete={handleDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
            />

        ))}
        {<button
            className="btn btn-danger btn-sm m-2"
            onClick={() => handleReset()}
        >Reset</button>}
    </>
}

export default CountersList