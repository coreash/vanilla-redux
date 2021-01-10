import {createStore} from 'redux';

const ADD = "ADD";
const DELETE = "DELETE";

const AddTodo = (text) => {
    return {
        type: ADD,
        text
    }
}
const DelTodo = (id) => {
    return {
        type: DELETE,
        id
    }
}
const reducer = (state = [], action) => {
    switch(action.type){
        case ADD:
            return [{text: action.text, id: Date.now()}, ...state];
        case DELETE:
            return state.filter(todo => todo.id !== action.id);
        default :
            return state;
    }
}
const store = createStore(reducer);

export const actionCreator = {
    AddTodo,
    DelTodo
}
export default store;