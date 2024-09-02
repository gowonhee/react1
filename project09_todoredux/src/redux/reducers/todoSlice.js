import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        /*
            1. addTodo : todos 배열에 할일을 추가한다.
            2. checkChangeTodo : 선택한 할 일의 완료여부를 수정한다.
            3. textChangeTodo : 선택한 할 일의 내용을 수정한다. 
            4. deleteTodo : 선택한 할 일을 삭제한다. 
        */
        addTodo(state, action) {
            // console.log('addTodo', action)
            state.todos.push(action.payload)
        },
        checkChangeTodo(state, action) {
            console.log('chech', action.payload.id)
            const checkedTodo = state.todos.find(item => item.id == action.payload.id)
            // console.log('checkedTodo', checkedTodo)

            if(checkedTodo){
                // id 값이 동일한게 있으면, 반대로 만들어주겠다!
                checkedTodo.complete = ! checkedTodo.complete
            }
        },
        textChangeTodo(state, action) {
            const updateTodo = state.todos.find(item => item.id == action.payload.id)
            if(updateTodo){
                updateTodo.text = action.payload.text
            }
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(item => item.id !== action.payload.id)
        }

    }
})

export const TodoActions = todoSlice.actions
export default todoSlice.reducer