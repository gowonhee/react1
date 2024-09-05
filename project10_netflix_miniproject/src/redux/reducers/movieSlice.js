import { createSlice } from "@reduxjs/toolkit"

export const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        popular : {},
        topRated : {},
        upcoming : {}
    },
    reducers: {
        initData(state, action){
            state.popular = action.payload
            state.topRated = action.payload
            state.upcoming = action.payload
        }
    }

})

export const MovieActions = movieSlice.actions
export default movieSlice.reducer