import * as action from './actions';

export const rootReducer = ( state, {type, payload} ) => {
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
      
      console.log(payload);
      return {
        ...state,
        todos
      }  
    
    default: return  { ...state }
  }
}