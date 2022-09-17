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
        const newCounters = counters.filter(i => (i.id != id))
        setCounters(newCounters)
    }

    const handleReset = () => {
        // тут мы меняем просто инициализацию, но не переписываем новый компонент
        setCounters(initialState)
    }

    const handleUpdate = () => {
        const updateState = [
            {id: 0, value: 1, name: "iPhone"},
            {id: 1, value: 4, name: "Apple"},
            {id: 2, value: 44, name: "Tennis"},
            {id: 3, value: 666, name: "WebStorm"},
            {id: 4, value: 100, name: "Uzbekistan"}
        ]
        setCounters(updateState)
    }

    return <>
        {counters.map(count => (
            <Counter
                key={count.id}
                {...count}
                onDelete={handleDelete}
            />

        ))}
        {<button
            className="btn btn-danger btn-sm m-2"
            onClick={() => handleReset()}
        >Reset</button>}
        {<button
            className="btn btn-danger btn-sm m-2"
            onClick={() => handleUpdate()}
        >Update</button>}
    </>
}

export default CountersList