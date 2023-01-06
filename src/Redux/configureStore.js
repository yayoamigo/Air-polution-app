import { configureStore } from '@reduxjs/toolkit';
import pullutionSlice from './ducks/slices';

const store = configureStore({
  reducer: {
    countries: pullutionSlice.reducer,
  },
});

export default store;
