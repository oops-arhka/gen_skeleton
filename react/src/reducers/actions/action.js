import { ADD_QUESTION } from './actionTypes'

let nextTodoId = 0
export const addTodoAC = content => ({
    type: ADD_QUESTION,
    payload: {
        id: ++nextTodoId,
        content,
    }
})

export const fetchQuestionsAC = () => {
    return async (dispatch) => {       
        let res = await fetch(`/getall`)
        let data = await res.json();
        console.log(data)
        //dispatch(addTodoAC(data));
    }
}

