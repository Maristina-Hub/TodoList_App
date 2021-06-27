import './index.css'
import Header from './components/Layout/Header'
import ListTodos from './components/Todolist/listTodos'
import AddTodo from './components/Todolist/addTodo'

const data = {
    brandImg: '',
    brandName: 'My Todo List'
}

const todoList = [ 
    {
    id: Math.random(),
    name: 'Read',
    isDone: false
}
]

const App = () => {
    return <div>
        <Header data={data}/>
        <ListTodos data={todoList} />
        <AddTodo/>
    </div>
}

export default App
