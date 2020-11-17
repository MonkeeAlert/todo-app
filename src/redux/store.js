import { createStore } from 'redux';
import { persistedReducer } from './reducers';
import { persistStore } from 'redux-persist';

const initialState = {
  todos: [],
  modal: {
    context: null,
    isVisible: false
  }
}

const store = createStore(
  persistedReducer, 
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const persistor = persistStore(store);

export {store, persistor};