import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
};

function TodoList(props) {
  const { todos } = props;
  return (
    <ul style={styles.ul}>
      {todos.map((todo, idx) => {
        return <TodoItem todo={todo} key={todo.id} idx={idx} onChange={props.onToggle} />;
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      completed: PropTypes.bool,
      id: PropTypes.number,
    }),
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
