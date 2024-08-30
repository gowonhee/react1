// React Toolkit 사용법
import { configureStore } from "@reduxjs/toolkit"
import postReducer from "./reducer/postSlice"

const store = configureStore({
    reducer : {
        post : postReducer
    }
})

export default store

// reducer/reducer.js 파일은 old redux를 위한 파일
// toolkit을 위한 파일은 postSlice.js


// Old Redux 사용법
// import { createStore } from "redux";
// import reducer from "./reducer/reducer";

// const store = createStore(reducer)
// export default store