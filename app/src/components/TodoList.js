import React from 'react';
import Todo from './Todo';

const TodoList = ({ items, completeTodo }) => {
    return (
        <ul>
            {items && items.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
