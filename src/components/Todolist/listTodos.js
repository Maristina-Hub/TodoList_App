import React, {useContext, useState, useEffect} from 'react'
import { store} from '../../store.js'



const ListTodos = () => {
    const [todo, setTodo] = useState(null)

    const {state, dispatch} = useContext(store)

    const handleDelete = (id) => {
        dispatch({type: 'Delete_Todo', data: id})
    }
 
    const findItem = (id) => {
        const item = todo.find(todos => todos.id === id)

        setTodo(item)
    }

    useEffect( () => {
        if(state !== null){
            setTodo(state.todo)
            console.log(state)
        } else{
            setTodo("")
        }
        
    }, [state])

    return (
        <div>
            {state.length ? (
                <ul className='list'>
        {state.map((list) => (
            <div key={list.id} > 
            <li>
                <span> {list.name} </span> 
                <button className='btn-edit task-btn' onClick={() => findItem (list.id)}> <i className='fas fa-pen'></i></button>
                <button className='btn-delete task-btn' onClick={() => handleDelete(list.id)}> <i className='fas fa-trash-alt'></i></button>
            </li>
            
            </div> 
        )
        )
        }
        </ul>

            ) : (
                <div className='no-tasks'>No Tasks</div>  

            )}
            </div>

       
        
    )
    
}

export default ListTodos;