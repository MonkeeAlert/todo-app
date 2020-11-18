// ● При превышении списком размеров экрана поле ввода должно остаться
// наверху, список должен прокручиваться.

// ● Вёрстка может быть самой примитивной, но должна быть. (Положение
// элементов, марджины, паддинги)

// ● Иконки для кнопок взять из font-awesome, палитру цветов из Material Design.

// ● Перезагрузка телефона не должна менять состояния задач. В случае, если,
// задача сдаётся на веб-версии React’а, закрытие вкладки и браузера не
// должно менять состояния задач.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';

import './scss/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
