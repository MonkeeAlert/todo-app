import React, { useEffect } from 'react'

import TodoForm from './components/Todos/Form';
import TodoList from './components/Todos/List';
import TodoModal from './components/Todos/Modal';

export default function App() {
  const handleUnload = e => {
    e.preventDefault();

    // code for stopping all timers
    // ...
  }

  useEffect(() => {
    window.addEventListener('beforeunload', handleUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    }
  });
  useEffect(() => {
  
  }, []);

  return (
    <main className="main">
      <TodoForm />
      <TodoList />
      <TodoModal />
    </main>
  )
}

// export default App
