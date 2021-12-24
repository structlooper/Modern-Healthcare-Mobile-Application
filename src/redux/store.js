import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import {
  authReducer,
  settingReducer, signUpReducer,doctorFilterReducer
} from "./reducers";

const persistConfig = {
  key: 'persist-root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  settingReducer,
  signUpReducer,
  authReducer,
  doctorFilterReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
