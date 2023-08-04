import React from 'react';
import Todo from './Todo';

interface TodoListProps {
  todos: { text: string; completed: boolean }[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo key={index} text={todo.text} completed={todo.completed} />
      ))}
    </div>
  );
};

export default TodoList;