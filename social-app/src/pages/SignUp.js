import React from 'react';
import './SignUp.css';
import { useState } from 'react';
import { checkPassword, removeWhiteSpaces } from '../data/tools';

function SignUp() {
  const [inputValName, setInputValName] = useState('');
  const [inputValPass, setInputValPass] = useState('');

  const controlName = (e) => {
    const input = e.target;
    // In case of write or paste:
    let val = removeWhiteSpaces(input.value);

    setInputValName(val);
  };

  // TODO:
  const controlPass = (e) => {
    const input = e.target;
    // In case of write or paste:

    setInputValPass(e.target.value);
  };

  // TODO:
  const handleSubmit = (e) => {
    e.preventDefault();
    // Zmienić ref na onChange do state
    const pass = e.target.querySelector('[name="password"]').value;
    const passControl = e.target.querySelector(
      '[name="passwordControl"]'
    ).value;

    console.log(inputValPass);

    if (!checkPassword(pass)) console.log('Wrong pass');
    if (pass !== passControl) console.log('Rozne hasla');
  };

  return (
    <div>
      <form className='signup-form' onSubmit={handleSubmit}>
        <input
          className='input'
          name='name'
          type='text'
          minLength={4}
          value={inputValName}
          onChange={controlName}
          required
        />
        <input className='input' name='email' type='email' required />
        <input
          className='input'
          name='password'
          type='password'
          minLength={6}
          onChange={controlPass}
          required
        />
        <input
          className='input'
          name='passwordControl'
          type='password'
          required
        />
        <button type='submit'>Sign Up!</button>
      </form>
    </div>
  );
}

export default SignUp;
