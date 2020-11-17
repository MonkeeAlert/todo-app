import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import Input from '../Controls/Input/Input';
import Button from '../Controls/Button/Button';
import { addTodo } from '../../redux/actions';
import { generateId } from '../../utils/functions';

function TodoForm() {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault()

    if(inputRef.current.value === '') return false;
    
    const todo = { title: inputRef.current.value, id: generateId() };
    dispatch(addTodo( todo ));
    inputRef.current.value = '';
  }

  return (
    <form onSubmit={ handleSubmit }>
      <Input ref={inputRef} type='text' placeholder='Make a sandwich'/>
      <Button type='submit' text="Create"/>
    </form>
  )
}

export default TodoForm
