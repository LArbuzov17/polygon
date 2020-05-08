import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
  },
  input: {
    marginRight: '1rem',
  },
  rm: {
    background: 'red',
    borderRadius: '50%',
    color: '#fff',
    border: 'none',
  },
};

function TodoItem({ todo, idx, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push('done');
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong>{idx + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button type="button" onClick={removeTodo.bind(null, todo.id)} style={styles.rm}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,
  idx: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
