import React, {useState} from "react";
import AddNewTodo from '../components/addNewTodo';

const ToDoList = () => {
    const [todos, setTodos ] = useState( [
        {
            text: 'Pay bills',
            id: 1
        },
        {
            text: 'Do your homework',
            id: 2
        },
        {
            text: 'Feed the dog',
            id: 3
        }
    ] );

        const addTodo = () => {
            setTodos( [
                ...todos, 
                { text: 'Learn hooks', id: Math.random()}
            ]);

        }
    return (
        <div>
            <ul>
                {todos.map( (todo) => {
                    return (
                        <li key = {todo.id}>{todo.text}</li>
                    )
                })}
            </ul>
            <AddNewTodo />
        </div>
    )
};

export default ToDoList;