import React from 'react'

const ToDoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <div>
        <li>
            <span 
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
                onClick={() => toggleTodo(todo.id)}
            >
                {todo.text}
            </span>
            <button className='delete-btn' onClick={() => removeTodo(todo.id)}>Delete</button>
        </li>
        <div className="divider"></div>
    </div>
  )
}

export default ToDoItem
