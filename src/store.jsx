import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import modalSlice from './features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    modal: modalSlice,
  },
});
