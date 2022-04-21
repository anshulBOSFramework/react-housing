import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import ReduxThunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

import reducers from './reducers'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [
		'authentication'
	],
}

const persistedReducer = persistCombineReducers(persistConfig, reducers)

export const store = createStore(
	persistedReducer,
	{},
	applyMiddleware(ReduxThunk),
);
export const persistor = persistStore(store)
