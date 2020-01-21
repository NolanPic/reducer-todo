import React, { useState } from 'react';

const Form = ({ addTodo }) => {

    const [todoText, setTodoText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(todoText);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={todoText}
                onChange={e => setTodoText(e.target.value)}
            />
        </form>
    );
};

export default Form;
