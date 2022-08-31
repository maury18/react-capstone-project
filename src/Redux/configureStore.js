import { configureStore } from '@reduxjs/toolkit';
import amiibos from './nintendo';

const store = configureStore({
  reducer: {
    amiibos,
  },
});

export default store;
