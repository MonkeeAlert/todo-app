// ● Каждый элемент списка состоит из:
// o Названия задачи
// o Затраченного времени
// o Кнопки Start/Stop
// o Кнопки Delete

// ● При нажатии кнопки Start таймер, задачи продолжает свой отсчёт, при
// нажатии Stop встаёт на паузу

// ● При нажатии кнопки Delete появляется модальное окно с вопросом «Вы
// уверены»? Да/Нет. Если да, задачу удаляем.

// ● У каждой задачи свой индивидуальный таймер. Любую задачу из списка в
// любой момент можно запустить\остановить. Запуск\остановка таймера
// задачи не должна влиять на другие задачи.

// ● Название в задаче является необязательным, но при этом задача должна
// идентифицироваться, как отдельная задача. Может существовать
// несколько задач с одинаковым названием или без него.


import React, { useState, useRef } from 'react'
import { removeTodo } from '../../redux/actions';
import Button from '../Controls/Button/Button'
import { useDispatch } from 'react-redux';

export default function TodoItem({id, title}) {
  let timer = useRef();
  let stopwatch = useRef();

  let start = useRef();
  let elapsed = useRef(0);

  const [ isPaused, setState ] = useState(true);
  const dispatch = useDispatch();

  const handleStart = _ => {
    start.current = Date.now() - elapsed.current;
    let diffS, diffM, diffH, diffD;
    let ss, mm, hh, dd;
    
    timer.current = setInterval( _ => {
      elapsed.current = Date.now() - start.current;

      diffS = Math.floor(elapsed.current / 1000);
      diffM = Math.floor(diffS / 60);
      diffH = Math.floor(diffM / 60);
      diffD = Math.floor(diffH / 24);
      
      ss = diffS.toString().padStart(2, '0');
      mm = diffM.toString().padStart(2, '0');
      hh = diffH.toString().padStart(2, '0');
      dd = diffD.toString().padStart(2, '0');

      // seconds = Math.floor(elapsed.current / 1000).toString().padStart(2, '0');
      // minutes = Math.floor(elapsed.current / 1000 * 60).toString().padStart(2, '0');
      // hours = elapsed.current/1000*60*60;

      console.log(`${dd}:${hh}:${mm}:${ss}`);
      stopwatch.current.innerHTML = `${dd}:${hh}:${mm}:${ss}`
    }, 1000 );
    setState(false);
  }

  const handleStop = _ => {
    
    clearInterval(timer.current);

    setState(true);
  }

  const handleRemove = _ => {
    clearInterval(timer.current);
    dispatch(removeTodo(id))  
  }

  return (
    <li>
      <p>{title}</p>
      <p>
        <span ref={stopwatch}>dd:hh:mm:ss</span>

        { 
          isPaused ? 
            <Button type="button" text="start" onButtonClick={ handleStart } /> : 
            <Button type="button" text="pause" onButtonClick={ handleStop } /> 
        }
      </p>
      <Button type="button" text="delete" onButtonClick={ handleRemove }/>
    </li>
  )
}
