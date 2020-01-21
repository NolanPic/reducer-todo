import React, { useReducer } from 'react';
import './App.css';
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

  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo} />
        <TodoList
          items={state.todos}
          completeTodo={completeTodo}
        />
        <button onClick={clearCompleted}>Clear completed</button>
      </header>
    </div>
  );
}

export default App;
