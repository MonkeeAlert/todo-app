import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import Input from '../Controls/Input/Input';
import Button from '../Controls/Button/Button';
import { addTodo } from '../../redux/actions';
import { generateId, getDefaultPlaceholder } from '../../utils/functions';
import Form from '../Form/Form';

function TodoForm() {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = _ => {
    if(inputRef.current.value === '') return false;
    
    const todo = { title: inputRef.current.value, id: generateId() };
    dispatch(addTodo( todo ));

    inputRef.current.value = '';
    inputRef.current.placeholder = getDefaultPlaceholder()
  }

  return (
    <Form 
      onSubmitEvent={ handleSubmit } 
      className="todo__form" 
    >
      <Input 
        ref={inputRef} 
        type='text' 
        placeholder={ getDefaultPlaceholder() }
        className="input todo__form-input"
      />
      <Button 
        type='submit' 
        text="Добавить"
        className="button button--teal"
      />
    </Form>
  )
}

export default TodoForm
