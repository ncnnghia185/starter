import { createSlice } from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
    name: 'auth/session',
    initialState: {
        accessToken: '',
        signedIn: false,
    },
    reducers: {
        onSignInSuccess: (state, action) => {
            state.signedIn = true
            state.accessToken = action.payload
        },
        onSignOutSuccess: (state) => {
            state.signedIn = false
            state.accessToken = ''
        },
        setToken: (state, action) => {
            state.accessToken = action.payload
        },
    },
})

export const { onSignInSuccess, onSignOutSuccess, setToken } =
    sessionSlice.actions

export default sessionSlice.reducer
