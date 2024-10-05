import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './theme/themeSlice.js';
import apiSlice from './api/apiSlice.js';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    api: apiSlice,
  },
})