import React, { useState } from 'react';

const Form = () => {

    const [todoText, setTodoText] = useState('');

    return (
        <form>
            <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)} />
        </form>
    );
};

export default Form;
