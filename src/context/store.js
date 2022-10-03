import { configureStore } from '@reduxjs/toolkit';
import preferencesUserReducer from './preferencesUserSlice';

export const store = configureStore({
  reducer: {
    preferencesUser: preferencesUserReducer,
  },
})