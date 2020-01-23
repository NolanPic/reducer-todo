import React from 'react';

const Todo = ({ todo, completeTodo }) => {

    const { id, item, completed } = todo;

    const styles = {
        textDecoration: completed ? 'line-through' : 'none',
        cursor: 'pointer',
        fontSize: '1.5rem'
    };

    return (
        <li style={styles} onClick={() => completeTodo(id)}>{item}</li>
    );
}

export default Todo;
