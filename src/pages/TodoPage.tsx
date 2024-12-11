import { useState } from "react";
import { type TodoTypes } from "../interfaces/todo.interface";

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<TodoTypes[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo: TodoTypes = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, todo]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo: TodoTypes) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage