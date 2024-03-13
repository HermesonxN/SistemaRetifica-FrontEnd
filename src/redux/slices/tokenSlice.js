import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: 'tokens',
    initialState: {
        token: [],
    },
    reducers: {
        addToken: (state, action) => {
            state.token.push(action.payload)
        }
    }
})

export const { addToken } = tokenSlice.actions;
export default tokenSlice.reducer;