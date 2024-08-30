import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    post : [],
    keyword : ""
}

export const postSlice = createSlice({
    name : 'post',
    initialState,
    reducers : {
        addPost(state,action){
            state.post = [ action.payload, ...state.post]
        },
        searchKeyword(state,action){
            state.keyword = action.payload
        }
    }
})

// slice를 쓸 때 export 하는 경우 3가지 : slice, actions, reducer(default)


// Component 에서 reducer 함수를 실행할 수 있도록 내보내기
export const postActions = postSlice.actions

// store에서 reducer에 접근할 수 있도록 내보내기
export default postSlice.reducer