import React, { useState, useRef } from 'react'
import { toggleModal } from '../../redux/actions';
import Button from '../Controls/Button/Button'
import { useDispatch, useStore } from 'react-redux';

export default function TodoItem({id, title}) {
  let timer = useRef();
  let stopwatch = useRef();
  let start = useRef();
  let elapsed = useRef(0);

  const [ isPaused, setState ] = useState(true);
  const dispatch = useDispatch();
  const store = useStore();
  
  const handleStart = _ => {
    start.current = Date.now() - elapsed.current;
    let diffS, diffM, diffH, diffD;
    let ss, mm, hh, dd;
    
    timer.current = setInterval( _ => {
      elapsed.current = Date.now() - start.current;

      diffD = Math.floor(elapsed.current / (1000 * 60 * 60 * 24));
      diffH = Math.floor((elapsed.current % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      diffM = Math.floor((elapsed.current % (1000 * 60 * 60)) / (1000 * 60));
      diffS = Math.floor((elapsed.current % (1000 * 60)) / 1000);
      
      ss = diffS.toString().padStart(2, '0');
      mm = diffM.toString().padStart(2, '0');
      hh = diffH.toString().padStart(2, '0');
      dd = diffD.toString().padStart(2, '0');

      stopwatch.current.innerHTML = `${dd}:${hh}:${mm}:${ss}`;
    }, 1000 );

    if(store.getState().modal.isVisible) {
      const todo = { id, timer : timer.current }

      dispatch(toggleModal({ context: todo, isVisible: false }));
    }
    console.log(store.getState().modal);
    setState(false);
  }

  const handleStop = _ => {
    if(timer.current !== undefined) {
      if(store.getState().modal.isVisible) {
        const todo = { id, timer : timer.current }

        dispatch(toggleModal({ context: todo, isVisible: false }));
      }
      
      clearInterval(timer.current);
    }

    setState(true);
  }

  const showModal = _ => {
    handleStop();
    const todo = { id, timer : timer.current }

    dispatch(toggleModal({ context: todo, isVisible: true}));  
  }

  return (
    <li className="todo__list-item">
      <p className="text text--header todo__list-block todo__list-block--header todo__list-text todo__list-text--header">{title}</p>
      <p className="text text--header todo__list-block todo__list-block--timer todo__list-text todo__list-text--header">
        <span ref={stopwatch}>00:00:00:00</span>
        { 
          isPaused ? 
            <Button type="button" className="button button--icon button--play" onButtonClick={ handleStart }  /> : 
            <Button type="button" className="button button--icon button--pause" onButtonClick={ handleStop }  /> 
        }
      </p>
      <div className="todo__list-block todo__list-block--delete">
        <Button className="button button--icon button--delete" type="button" onButtonClick={ showModal }/>
      </div>
    </li>
  )
}
