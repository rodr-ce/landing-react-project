import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUSer: null,
    hiddenMenu: true
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return {
                ...state,
                currentUSer: action.payload
            }
        },
        toggleHiddenMenu: state => {
            return {
                ...state,
                hiddenMenu: !state.hiddenMenu
            }
        }
    }
})

export const { setCurrentUser, toggleHiddenMenu} = userSlice.actions

export default userSlice.reducer