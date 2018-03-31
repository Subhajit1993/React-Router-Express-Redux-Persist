import {createStore, applyMiddleware} from 'redux'
import mainReducer from '../reducer/mainReducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, mainReducer)
export const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);
export const persistor = persistStore(store);