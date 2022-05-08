import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name:"post",
    initialState:{
        post:[
            {
                title: "",
                description: "",
                tag: 0,
            }
        ]
    },
    reducers: {
        createPost: (state,action) =>{
            state.post = [...state.post, action.payload]
        }
    }
}) 

export const {createPost} = postSlice.actions
export default postSlice.reducer