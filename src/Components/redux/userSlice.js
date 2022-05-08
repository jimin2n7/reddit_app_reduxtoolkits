import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        name: "Tony Stark",
        age: "30 years old",
        about: "a Millionaire from NY",
        avaUrl:"https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
        themeColor: "#10C135"
    },
    reducers: {
        updateStart: (state) =>{
            state.pending = true
        },
        
        updateError: (state) =>{
            state.pending = false
            state.error = true
        },

        updateSuccess: (state, action) =>{
            state.pending = false
            state.error = false

            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.ava;
            state.themeColor = action.payload.themeColor;
        }
    }
})

export const {updateStart, updateError, updateSuccess} = userSlice.actions
export default userSlice.reducer