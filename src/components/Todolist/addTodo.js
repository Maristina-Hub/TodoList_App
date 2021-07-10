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

   const handleClearTodo = () => {
         dispatch({type: 'Clear_Todo', data: todo})
         setTodo([])
}


    return(
        <>
        <label className='form'></label>
        <input type='text' className='task-input' placeholder='Add new todo' onChange={handleTodo}/>
        <button className='btn add-task-btn' onClick={handleAddTodo}> Add Todo</button>
        <button className='btn add-task-btn' onClick={handleClearTodo}> Clear Todo</button>
        </>

    )
}   

export default AddTodo