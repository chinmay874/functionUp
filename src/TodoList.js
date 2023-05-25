import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo } from './todosSlice';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        name: newTodo,
        id: Date.now().toString(),
        status: 'pending',
      };
      dispatch(addTodo(todo));
      setNewTodo('');
    }
  };

  const handleToggleTodo = id => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.name}</span>
            <button onClick={() => handleToggleTodo(todo.id)}>
              {todo.status === 'pending' ? 'Completed' : 'Pending'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;