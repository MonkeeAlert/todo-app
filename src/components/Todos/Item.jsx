import React, { useState, useRef, useEffect } from 'react'
import { toggleModal, updateTodo } from '../../redux/actions';
import Button from '../Controls/Button/Button'
import { useDispatch, useStore } from 'react-redux';

export default function TodoItem({id, isPaused, title, countdownAsMs, countdownAsString, buttonRef }) {
  const [pause, setPause] = useState(isPaused)
  let timer = useRef();
  let stopwatch = useRef();
  let start = useRef();
  let elapsed = useRef(countdownAsMs ? countdownAsMs : 0);
  
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    // ...
  }, [ isPaused ])

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
          
    dispatch(updateTodo({ 
      id, 
      isPaused : false,
      countdownAsMs : elapsed.current,
      countdownAsString : stopwatch.current.innerHTML
    }));
    
    setPause(false)
  }

  const handleStop = _ => {
    if(timer.current !== undefined) {
      const todo = { id, timer : timer.current };
      
      if(store.getState().modal.isVisible) {
        dispatch(toggleModal({ context: todo, isVisible: false }));
      }
      
      dispatch(updateTodo({ 
        id, 
        isPaused : true,
        countdownAsMs : elapsed.current,
        countdownAsString : stopwatch.current.innerHTML,
      }));

      clearInterval(timer.current);
    }

    setPause(true)
  }

  const showModal = _ => {
    handleStop();
    const todo = { id, timer : timer.current };

    dispatch(toggleModal({ context: todo, isVisible: true}));  
  }

  return (
    <li className="todo__list-item">
      <p className="text text--header todo__list-block todo__list-block--header todo__list-text todo__list-text--header">{title}</p>
      <p className="text text--header todo__list-block todo__list-block--timer todo__list-text todo__list-text--header">
        <span ref={stopwatch}>{ countdownAsString }</span>
        { 
          pause ? 
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
