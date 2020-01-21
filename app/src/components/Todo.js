import React from 'react';

const Todo = ({ todo, completeTodo }) => {

    const { id, item, completed } = todo;

    const liStyle = {
        textDecoration: completed ? 'line-through' : 'none',
        cursor: 'pointer'
    };

    return (
        <li style={liStyle} onClick={() => completeTodo(id)}>{item}</li>
    );
}

export default Todo;
