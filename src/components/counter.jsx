import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [tags, setTags] = useState(['tag1', 'tag2', 'tag3',])
    const formatCount = () => {
        return count === 0 ? "empty" : count
    }

    const getBadgeClasses = () => {
        let classes = "badge m-2 "
        classes += count === 0 ? "bg-warning" : "bg-primary"
        return classes
    }

    const handleIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const handleDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    const handleChangeTag = (id) => {
        // удаляем элемент со страницы
        setTags(prevState => prevState.filter(tag => tag != id))
    }


    return (
        <>
            <ul>{
                tags.map(tag => {
                    return <li key={tag} className="btn btn-primary btn-sm m-2"
                               onClick={() => handleChangeTag(tag)}>{tag}</li>
                })
            }</ul>
            <span className={getBadgeClasses()}>{formatCount()}</span>
            <button className='btn bg-primary btn-sm m-2' onClick={handleIncrement}>+</button>
            <button className='btn bg-primary btn-sm m-2' onClick={handleDecrement}>-</button>
        </>
    )
}

export default Counter