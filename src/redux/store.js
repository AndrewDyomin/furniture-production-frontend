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
import { druftsReducer } from './drufts/slice';
import refreshTokenMiddleware from './middleware/refreshTokenMiddleware';
import { userReducer } from './user/slice';
import { fabricsReducer } from './fabrics/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
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
    drufts: druftsReducer,
    user: userReducer,
    fabrics: fabricsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(refreshTokenMiddleware),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
