import React from 'react'

const ToDoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li>
        <span 
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
            onClick={() => toggleTodo(todo.id)}
        >
            {todo.text}
        </span>
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default ToDoItem