import React from 'react';

function LoginForm({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Parent Component</h1>
      <input type="text" placeholder="Username" required />
      <br></br>
      <br></br>
      <input type="password" placeholder="Password" required />
      <br></br>
      <br></br>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
