import { useEffect, useState } from "react";
import {
  type TodoTypes,
  TodoPageInterface,
} from "../interfaces/todo.interface";

const TodoPage: React.FC<TodoPageInterface> = ({ heading }) => {
  const [todos, setTodos] = useState<TodoTypes[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  // useEffect(() => {
  //   if(todos.length > 0){
  //     localStorage.setItem("todoslist", JSON.stringify(todos));
  //   } else {
  //     localStorage.setItem("todoslist", JSON.stringify([{
  //       id: 0,
  //       text: "Sample Example",
  //       completed: true,
  //     }]));
  //   }
  // }, [todos]);

  useEffect(() => {
    // const mytodos = localStorage.getItem("todoslist");
    // if (mytodos) {
    //   setTodos(JSON.parse(mytodos));
    // }
    // fetch('https://dummyjson.com/todos')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     const _todo: TodoTypes[] = []
    //     json.todos.forEach((ele: { id: number; userId: number; completed: boolean; todo: string }) => {
    //       _todo.push({
    //         id: ele.id,
    //         title: ele.todo,
    //         completed: ele.completed,
    //         userId: ele.userId,
    //       })
    //     })
    //     setTodos(_todo)
    //   });
  }, []);

  const handleAddTodo = (todos: TodoTypes[]) => {
    if (newTodo.trim()) {
      const todo: TodoTypes = {
        id: todos.length + 1,
        title: newTodo,
        completed: false,
        userId: Math.random() * 1000
      };
      setTodos([...todos, todo]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo: TodoTypes) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-wrapper">
      <h1>{heading}</h1>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={() => handleAddTodo(todos)}>Add To List</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div>
              <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              &nbsp;
              <span onClick={() => toggleTodo(todo.id)}>{todo.title}</span>
            </div>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
