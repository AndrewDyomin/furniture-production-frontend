import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tasksReducer } from './tasks/slice';
import { ordersReducer } from './orders/slice';
import { authReducer } from './auth/slice';
import { productsReducer } from './products/slice';
import { componentsReducer } from './components/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

const productsPersistConfig = {
  key: 'products',
  storage,
  whitelist: ['activeItem'],
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    tasks: tasksReducer,
    orders: ordersReducer,
    products: persistReducer(productsPersistConfig, productsReducer),
    components: componentsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
