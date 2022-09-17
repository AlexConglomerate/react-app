import React, {useState} from "react";

const Counter = (props) => {

    // const [value, setValue] = useState(props.value)
    const {value} = props
    const formatValue = () => {
        return value === 0 ? "empty" : value
    }

    const getBadgeClasses = () => {
        let classes = "badge m-2 "
        classes += value === 0 ? "bg-warning" : "bg-primary"
        return classes
    }

    const handleIncrement = () => {
        console.log(`handleIncrement`)
        // props.value = props.value + 1  // не будет работать, т.к. props.value доступна только для чтения
        // Мы может изменять только useState, а не пропсы, которые задаём снаружи
        // setValue((prevState) => prevState + 1)
    }

    const handleDecrement = () => {
        console.log(`handleDecrement`)
        // setValue((prevState) => prevState - 1)
    }


    return (
        <div>
            <span>{props.name}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button className='btn bg-primary btn-sm m-2' onClick={handleIncrement}>+</button>
            <button className='btn bg-primary btn-sm m-2' onClick={handleDecrement}>-</button>
            {/*Мы не можем из дочернего компонента изменять родительский
            Поэтому мы передаём в дочерний компонент метод, из родительского компонента*/}
            <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => props.onDelete(props.id)}
            >Delete
            </button>
        </div>
    )
}

export default Counter