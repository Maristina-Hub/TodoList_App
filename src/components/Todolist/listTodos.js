import React from 'react'

const ListTodos = (props) => {
    return (
        <ul>
        {props.data.map((list, index) => {
        return <li key={index}> {list.name} </li>
        }
        )
        }
        </ul>
    )
}

export default ListTodos 