import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import {
  settingReducer
} from './reducers';

const persistConfig = {
  key: 'persist-root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  settingReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
