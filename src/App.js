import { useState } from "react";
import AddToDo from "./components/AddToDo"
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, id: Date.now(), completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-wrapper">
      <h1>To-Do List</h1>
      <AddToDo addTodo={addTodo} />
      <ToDoList 
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
