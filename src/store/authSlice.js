import { createSlice } from '@reduxjs/toolkit';

export function validateLogin(username, password) {
  const errors = {};
  if (!username.trim()) errors.username = 'Informe seu usuário.';
  if (!password.trim()) errors.password = 'Informe sua senha.';
  return errors;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null },
  reducers: {
    login(state, action) {
      const username = action.payload.username.trim();
      if (username) state.user = { username };
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
