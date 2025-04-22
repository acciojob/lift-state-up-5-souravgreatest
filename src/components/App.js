import React, { useState } from 'react';
import './../styles/App.css';
import LoginForm from './LoginForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
        {/* Do not remove the main div */}
        {isLoggedIn ? <h2>You are logged in!</h2> : <LoginForm onLogin={() => setIsLoggedIn(true)} />}
    </div>
  )
}

export default App
