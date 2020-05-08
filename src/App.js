import React from 'react';
import TodoList from './Todo/TodoList';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Первая тудушка' },
    { id: 2, completed: true, title: 'Вторая тудушка' },
    { id: 3, completed: false, title: 'Третья тудушка' },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  }

  return (
    <div className="wrapper">
      <h1>Basic React Todo List</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
