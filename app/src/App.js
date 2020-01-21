import React, { useReducer } from 'react';
import './neumorphic.css';
import { initialState, todoReducer } from './reducers/todoReducer';

// components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [ state, dispatch ] = useReducer(todoReducer, initialState);

  const addTodo = itemText => {
    if(itemText.length) {
      dispatch({
        type: 'ADD_TODO',
        payload: {
          id: new Date().getTime(),
          item: itemText,
          completed: false
        }
      });
    }
  };

  const completeTodo = id => {
    dispatch({
      type: 'COMPLETE_TODO',
      payload: id
    });
  };

  const clearCompleted = () => {
    dispatch({
      type: 'CLEAR_COMPLETED'
    });
  };

  const appStyles = {
    height: '90vh',
    display: 'grid',
    placeItems: 'center'
  };

  const innerStyles = {
    display: 'grid',
    placeItems: 'center'
  };

  const btnStyles = {
    fontSize: '1.5rem',
    border: '0'
  };

  return (
    <div style={appStyles}>
      <div className="todo-app bubble-in" style={innerStyles}>
        <Form addTodo={addTodo} />
        <TodoList
          items={state.todos}
          completeTodo={completeTodo}
        />
        <button style={btnStyles} onClick={clearCompleted}>Clear completed</button>
      </div>
    </div>
  );
}

export default App;
