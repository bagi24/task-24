import React, { useState } from 'react';
import TodoList from './Component/TodoList';
import AddTodoForm from './Component/AddTodoForm';

interface TodoItem {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (text: string) => {
    const newTodo: TodoItem = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;