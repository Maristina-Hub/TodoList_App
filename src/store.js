import React, { useReducer, createContext } from 'react'


const initialState = [
        // {
        // id: '2222',
        // name: 'clean',
        // isDone: false,
        // }
];


const store = createContext(initialState);

const { Provider } = store;

const deleteTodo = (todoList, id) => todoList.filter((todo) => todo.id !== id)


const editTodo = (todoList, id) => todoList.map ((todo) => todo.id === id ? {todoList, id} : todo) 


const clearTodo = () => {
    return([])
}

const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'Add_Todo':
                return[...state, action.data];
            case 'Find_Item':
                return(state, action.data);
            case 'Edit_Todo':
                return editTodo(state, action.data);
            case 'Clear_Todo':
                return clearTodo(state, action.data);
            case 'Delete_Todo':
                return deleteTodo(state, action.data)
            default:
                return state;
        }
    }, initialState) 
    return <Provider value={{state,dispatch}}> {children} </Provider>
}

export {store , StateProvider}