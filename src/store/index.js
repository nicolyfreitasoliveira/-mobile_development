import { configureStore } from '@reduxjs/toolkit';

// Os slices com regras de negócio serão adicionados nas próximas etapas.
const initialState = {};

export const store = configureStore({
  reducer: (state = initialState) => state,
});
