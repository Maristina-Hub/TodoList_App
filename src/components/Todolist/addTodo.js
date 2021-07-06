import React, {useState, useContext} from 'react'
import { store } from '../../store'

const AddTodo = () => {
    const [todo, setTodo] = useState({})

    const {dispatch} = useContext(store)

    const handleTodo = (event) => {
        const { value} = event.target

        setTodo({
            id: Math.random()*300*100-100,
            name: value,
            isDone: false
        })
    }
    //this adds to the todo list
    const handleAddTodo = () => {
        dispatch({type: 'Add_Todo', data: todo})
        
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