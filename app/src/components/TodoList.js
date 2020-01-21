import React from 'react';
import Todo from './Todo';


const TodoList = ({ items, completeTodo }) => {

    const styles = {
        listStyleType: 'none',
        padding: '0'
    };

    return (
        <>
            <ul style={styles}>
                {items.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        completeTodo={completeTodo}
                    />
                ))}
            </ul>
            {!items.length && <p>Nothing todo!</p>}
        </>
    );
};

export default TodoList;
