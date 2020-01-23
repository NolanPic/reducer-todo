import React, { useState } from 'react';

const Form = ({ addTodo }) => {

    const [todoText, setTodoText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(todoText);
        setTodoText('');
    }

    const inputStyles = {
        backgroundColor: 'rgba(0,0,0,0)',
        border: '1px solid #333',
        color: '#fff',
        fontSize: '1.5rem'
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                style={inputStyles}
                className="bump-ridge"
                value={todoText}
                onChange={e => setTodoText(e.target.value)}
            />
        </form>
    );
};

export default Form;
