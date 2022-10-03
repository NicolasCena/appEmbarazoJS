import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  darkMode: false,
  language: 'spanish'
}

export const preferencesUserSlice = createSlice({
  name: 'preferencesUserSlice',
  initialState,
  reducers: {
    changeDarkMode: () => {
      state.darkMode = !state.darkMode
    },
    changeStatusLogin: (isLog) => {
      state.isLogin = isLog
    },    
    language: (language) => {
      state.language = language
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeStatusLogin, changeDarkMode, language } = preferencesUserSlice.actions

export default preferencesUserSlice.reducer