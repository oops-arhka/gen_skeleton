import { ADD_TODO, DEL_TODO, EDIT_TODO } from './actionTypes'

let nextTodoId = 0
export const addTodoAC = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content,
    }
})

export const delTodoAC = (id) => ({
    id: id,
    type: DEL_TODO,
})

export const editTodoAC = (content, id) => ({
    type: EDIT_TODO,
    id: id,
    content
})