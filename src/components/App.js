import React, { useState } from 'react';
import './../styles/App.css';
import LoginForm from './LoginForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
        {/* Do not remove the main div */}
        {isLoggedIn ? <p>You are logged in!</p> : <LoginForm onLogin={() => setIsLoggedIn(true)} />}
    </div>
  )
}

export default App
