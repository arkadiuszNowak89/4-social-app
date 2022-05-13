import React from 'react';
import './SignUp.css';
import { useState } from 'react';
import { checkPassword, removeWhiteSpaces } from '../data/tools';

function SignUp() {
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    pass: '',
    passControl: '',
  });

  const controlData = (e) => {
    const name = e.target.name;
    let val = e.target.value;
    if (name === 'name') val = removeWhiteSpaces(val);

    setInputData({
      ...inputData,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkPassword(inputData.pass)) console.log('Wrong pass');
    if (inputData.pass !== inputData.passControl) console.log('Rozne hasla');
  };

  return (
    <div>
      <form className='signup-form' onSubmit={handleSubmit}>
        <input
          className='input'
          name='name'
          type='text'
          minLength={4}
          value={inputData.name}
          onChange={controlData}
          required
        />
        <input
          className='input'
          name='email'
          type='email'
          onChange={controlData}
          required
        />
        <input
          className='input'
          name='pass'
          type='password'
          minLength={6}
          onChange={controlData}
          required
        />
        <input
          className='input'
          name='passControl'
          type='password'
          onChange={controlData}
          required
        />
        <button type='submit'>Sign Up!</button>
      </form>
    </div>
  );
}

export default SignUp;
