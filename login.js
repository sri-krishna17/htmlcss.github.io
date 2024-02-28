import React, { useState } from 'react';
import './Login.css';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onButtonClick = (ev) => {
    ev.preventDefault();

    // Set initial error values to empty
    setEmailError('');
    setPasswordError('');

    // Check if the user has entered both fields correctly
    if ('' === email) {
      setEmailError('Please enter your email');
      return;
    }

    if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email');
      return;
    }

    if ('' === password) {
      setPasswordError('Please enter a password');
      return;
    }

    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer');
      return;
    }

    // Authentication calls will be made here...
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Log in</div>
      </div>
      <div>
        <form onSubmit={onButtonClick}>
          <div className={'inputContainer'}>
            <input
              value={email}
              placeholder="Enter your email here"
              onChange={(ev) => setEmail(ev.target.value)}
              className={'inputBox'}
            />
            <label className="errorLabel">{emailError}</label>
          </div>
          <br />
          <div className={'inputContainer'}>
            <input
              value={password}
              placeholder="Enter your password here"
              onChange={(ev) => setPassword(ev.target.value)}
              className={'inputBox'}
              type="password"
            />
            <label className="errorLabel">{passwordError}</label>
          </div>
          <br />
          <div className={'inputContainer'}>
            <input className={'inputButton'} type="submit" value={'Log in'} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;