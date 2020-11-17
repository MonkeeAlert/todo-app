export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const addTodo = payload => ({ type: ADD_TODO, payload });
export const removeTodo = payload => ({ type: REMOVE_TODO, payload });
export const toggleModal = payload => ({ type: TOGGLE_MODAL, payload });