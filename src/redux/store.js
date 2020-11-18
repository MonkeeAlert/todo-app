import { createStore } from 'redux';
import { persistedReducer } from './reducers';
import { persistStore } from 'redux-persist';
import { generateId } from '../utils/functions';

const initialState = {
  todos: [
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
    { title: 'Sample test', id: generateId(), isPaused: false, countdownAsMs: 0, countdownAsString: '00:00:00:00'},
  ],
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