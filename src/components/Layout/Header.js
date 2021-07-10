import React from 'react'
import {Link} from 'react-router-dom'
import './headerStyled.js'
import Title  from './headerStyled.js'
import ListTodos from '../Todolist/listTodos.js'
import AddTodo from '../Todolist/addTodo.js'
import { Route, Switch } from 'react-router-dom'



const Header = ({data: { brandImg, brandName } }) => {
    return(
    <>
        <div className='container'>
            <div className='app-wrapper'>
                <Title className='header'>{brandName}</Title>
                <div className='main'>
                    
                    
                    <ul>
                        <li> <Link to={'/add-todo'}> Add Todo </Link> </li>
                        <li> <Link to={'/'}> Back </Link> </li>
                        <Switch>
                            <Route exact path='/' component={ListTodos}/>
                            <Route exact path='/add-todo' component={AddTodo}/>
                    </Switch>
                    </ul>
                </div>
            </div>
            
        </div>
    </>
    
    )
}

export default Header