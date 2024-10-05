import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: 'dark',
    logo: '/images/darkLogo.png',
    columnCount: 3,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.mode = state.mode === 'dark' ? 'light' : 'dark';
        },
        changeLogo: (state) => {
            state.logo = state.logo === '/images/darkLogo.png' ? '/images/lightLogo.png' : '/images/darkLogo.png';
        },
        changeColumnCount: (state,payload) => {
            state.columnCount = payload.payload;
        }
    }
})

export const { changeTheme, changeLogo, changeColumnCount } = themeSlice.actions

export default themeSlice.reducer