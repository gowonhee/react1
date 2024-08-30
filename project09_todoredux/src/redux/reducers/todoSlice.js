import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        todos : []
    },
    reducers : {
        /*
            1. addTodo : todos 배열에 할일을 추가한다.
            2. checkChangeTodo : 선택한 할 일의 완료여부를 수정한다.
            3. textChangeTodo : 선택한 할 일의 내용을 수정한다. 
            4. deleteTodo : 선택한 할 일을 삭제한다. 
        */
       addTodo(state, action){
            state.todos.push(action.payload);
       },
    //    checkChangeTodo(state, action){
    //         state
    //    },
    //    textChangeTodo(state, action){
    //         state
    //    },
    //    deleteTodo(state, action){
    //         state.todos 
    //    }

    }
})

export const TodoActions = todoSlice.actions
export default todoSlice.reducer