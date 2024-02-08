import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './style.css';
import { loginUser } from '../../../config/firebase';

function Login() {
  const navigate = useNavigate();
  const {tr,setTr} = false




 async function login() {
      const allinputs = document.getElementsByClassName('inp');
      const email = allinputs[0].value;
      const password = allinputs[1].value;
      
      console.log(email);

      try {
        await loginUser(email, password);
        alert('Login successful');
        navigate('/');
      } catch (error) {
        alert(error)
      }

    // Validate email and password
    if (email === '') {
      alert('Please enter the email!');
      return;
    }
    if (password === '') {
      alert('Please enter the password!');
      return;
    }

    if (password.length < 8) {
      alert('Please enter a password with a minimum of 8 characters!');
      return;
    }



  }

  return (
    <div>
        <div className='Body'>
      <div className="Con">
        <span>
          <h3>Login</h3>
        </span>
        <span>
          <p>Email:</p>
          <input className='inp' type="email" placeholder="Enter your email" />
        </span>
        <span>
          <p>Password:</p>
          <input className='inp' type="password" placeholder="Enter your password" />
        </span>
        <br />
        <span>
          <button onClick={login}>Login</button>
        </span>
        <span>
          <p className="href">Don't have an account. <a onClick={() => navigate('/signup')}>Click here!</a></p>
        </span>
      </div>
    </div>
    </div>
  );
}

export default Login;
