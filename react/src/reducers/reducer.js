import { ADD_TODO, DEL_TODO, EDIT_TODO } from './actions/actionTypes'

const initialState = {
    todos: [],
    test: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return Object.assign({}, state, {todos : [...state.todos, action.payload]})          
        }

        case DEL_TODO: {
            return Object.assign({}, state, {todos : [...state.todos.filter((el)=>el.id !== action.id)]})
        }

        case EDIT_TODO: {
            return Object.assign({}, state, {todos : [...state.todos.map((el)=>action.id === el.id ? {...el, content : action.content} : el)]})
        }

        default: {
            return state;
        }
    }
}