import React from 'react';

interface TodoProps {
  text: string;
  completed: boolean;
}

const Todo: React.FC<TodoProps> = ({ text, completed }) => {
  return (
    <div className={`todo ${completed ? 'completed' : ''}`}>
      <p>{text}</p>
    </div>
  );
};

export default Todo;