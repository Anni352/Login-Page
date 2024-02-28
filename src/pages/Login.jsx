import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function AuthInputs() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });
  
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  const emailNotValid = didEdit.email && !enteredValues.email.includes('@');
  const passwordNotValid = didEdit.password && enteredValues.password.trim().length < 6;

  function handleLogin(event) {
    event.preventDefault();
  
    console.log(enteredValues);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }))

    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }));
  }

  function handleInputBlur(identifier){
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }))
  }

  return (
    <form onSubmit={handleLogin}>
      <div id="auth-inputs">
        <div className="controls">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              onBlur={() => handleInputBlur('email')}
              onChange={(event) => handleInputChange('email', event.target.value)}
              value={enteredValues.email}
            />
            <div className='control-error'>{emailNotValid && <p>Please Enter Valid Email Address.</p>}</div>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              onBlur={() => handleInputBlur('password')}
              onChange={(event) => handleInputChange('password', event.target.value)}
              value={enteredValues.password}
            />
            <div className='control-error'>{passwordNotValid && <p>Password length is less than 6 words.</p>}</div>
          </div>
        </div>
        <div className="actions">
          <button type="button" className="text-button">
            <Link to ="/Signup"> Create a new account </Link>
          </button>
          <button className='button' onClick={handleLogin}>Login</button>
        </div>
      </div>
    </form>
  );
}