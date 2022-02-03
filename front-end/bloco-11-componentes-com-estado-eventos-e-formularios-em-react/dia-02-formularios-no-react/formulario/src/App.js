import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div>
      <header>
      </header>
      <main className="app">
        <LoginForm />
        <RegisterForm />
      </main>
    </div>
  );
}

export default App;
