import { ADD_QUESTION, } from './actions/actionTypes'

const initialState = {
    questions : []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_QUESTION: {
            return Object.assign({}, state, {questions : [...state.questions, action.payload]})          
        }

        // case DEL_TODO: {
        //     return Object.assign({}, state, {todos : [...state.todos.filter((el)=>el.id !== action.id)]})
        // }

        // case EDIT_TODO: {
        //     return Object.assign({}, state, {todos : [...state.todos.map((el)=>action.id === el.id ? {...el, content : action.content} : el)]})
        // }

        default: {
            return state;
        }
    }
}