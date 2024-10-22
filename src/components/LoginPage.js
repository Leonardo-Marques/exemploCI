import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Importa o arquivo CSS

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setLogin(value);
    }
  };

  const handleLoginClick = () => {
    navigate('/home'); // Redireciona para a página "home"
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={handleLoginChange}
        />
        <input type="password" placeholder="Senha" />
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
