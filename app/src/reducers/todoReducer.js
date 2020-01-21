export const initialState = {
    todos: []
};

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [ ...state.todos, action.payload ]
            };
        case "COMPLETE_TODO":
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}