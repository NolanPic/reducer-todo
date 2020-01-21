import React from 'react';

const Todo = ({ todo }) => {

    const { id, item, completed } = todo;

    return (
        <li>{item}</li>
    );
}

export default Todo;
