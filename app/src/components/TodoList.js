import React from 'react';
import Todo from './Todo';

const TodoList = ({ items }) => {
    return (
        <ul>
            {items.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;
