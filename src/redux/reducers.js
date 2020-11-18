import * as action from './actions';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['modal']
}

const rootReducer = ( state, {type, payload} ) => {
  switch(type) {
    case action.ADD_TODO:
      return{
        ...state,
        todos: [
          payload,
          ...state.todos
        ]
      }

    case action.REMOVE_TODO:
      const todos = state.todos.filter( i => i.id !== payload )
      
      return {
        ...state,
        todos
      }  

    case action.UPDATE_TODO:
      const newList = state.todos.map( i => {
        if(i.id === payload.id) {
          i.countdownAsString = payload.countdownAsString;
          i.countdownAsMs = payload.countdownAsMs;
          i.isPaused = payload.isPaused;
        }
        
        return i;
      });
      
      return {
        ...state,
        todos: newList
      }    

    case action.TOGGLE_MODAL:  
      return {
        ...state,
        modal: { 
          context : payload.context, 
          isVisible : payload.isVisible 
        }
      }  
    
    default: return  { ...state }
  }
}

export const persistedReducer = persistReducer(persistConfig, rootReducer);