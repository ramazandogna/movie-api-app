import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import createWebStorage from 'redux-persist/es/storage/createWebStorage';
import { movieApi } from '../services/movieApi';
import moviesReducer from '../features/addMovie/moviesSlice';
import persistReducer from 'redux-persist/es/persistReducer';
const persistConfig = {
   key: 'root',
   version: 1,
   storage: createWebStorage('local'), // veya AsyncStorage
};

const reducer = combineReducers({
   [movieApi.reducerPath]: movieApi.reducer,
   movies: moviesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: ['persist/PERSIST'], // Serileştirme kontrolünden hariç tutulan eylem
         },
      }).concat(movieApi.middleware),
});
