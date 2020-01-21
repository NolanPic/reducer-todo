export const initialState = {
    todos: []
};

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [...state.todos, action.payload];
        default:
            return state;
    }
}