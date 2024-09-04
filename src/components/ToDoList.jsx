import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({ todos, toggleTodo, removeTodo }) => {
    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        removeTodo={removeTodo}
                    />
                ))}
            </ul>
        </div>
  )
}

export default ToDoList