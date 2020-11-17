import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { removeTodo, toggleModal } from '../../redux/actions';
import Button from '../Controls/Button/Button';
import Modal from '../Modal/Modal';

function TodoModal({modal}) {
  const dispatch = useDispatch();

  const handleYes = _ => {
    if( !modal.isVisible ) return false;
    
    if( modal.context.timer !== undefined ) clearInterval( modal.context.timer );
    
    dispatch( removeTodo(modal.context.id) );
    dispatch( toggleModal( { context: null, isVisible: false } ) )      

    return;
  }
  const handleNo = _ => {
    if( !modal.isVisible ) return false;

    dispatch( toggleModal( { context: modal.context, isVisible: false } ) )  
  };

  if(modal.isVisible === false) return null;

  return (
    <Modal header="Вы уверены?" type={`default`}>
      <p className="text text--regular modal__text--caption">Задание будет удалено</p>
      <div className="modal__buttons">
        <Button type="button" text="Да" className="button button--flat button--flat-red" onButtonClick={ handleYes } />
        <Button type="button" text="Нет" className="button button--flat button--flat-blue" onButtonClick={ handleNo } />
      </div>
    </Modal>
  )
}

const mapDispatchToProps = state => ({ modal: state.modal });

export default connect(mapDispatchToProps)(TodoModal);


