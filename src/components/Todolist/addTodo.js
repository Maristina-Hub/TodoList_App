import React, {useState} from 'react'

const AddTodo = () => {
    const [todo, setTodo] = useState({})

  
    const handleTodo = (event) => {
        const {value} = event.target

        setTodo({
            id: '',
            name: value,
            isDone: false
        })
    }

    const handleAddTodo = (todoList) => {
        todoList.push(todo)
        
    };

    return(
        <>
        <label>Add Todo </label>
        <input placeholder='Add new todo' onChange={handleTodo}/>
        <button onClick={handleAddTodo}> Add Todo</button>
        </>

    )
}

export default AddTodo