import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const [counters, setCounters] = useState([
        {id: 0, value: 0, name: "iPhone"},
        {id: 1, value: 4, name: "Apple"},
        {id: 2, value: 0, name: "Tennis"},
        {id: 3, value: 0, name: "WebStorm"},
        {id: 4, value: 0, name: "Uzbekistan"}
    ])
    const handleDelete = () => {
        console.log(`999`)

        // setCounters([...counters, {id: 5, value: 0, name: "USA"}]) // для добавления компонента
        // setCounters(counters.filter(i => (i.id != "3"))) // удалить третий компонент

    }
    return <>
        {counters.map(count => (
            <Counter key={count.id} value={count.value} name={count.name} onDelete={handleDelete}>
                {/*<span>{count.name}</span>*/}
            </Counter>
        ))}
    </>
}

export default CountersList