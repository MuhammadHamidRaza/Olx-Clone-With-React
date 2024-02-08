import React from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../../config/firebase';

function Signup() {
    const navigate = useNavigate()

    async function signUp() {
        const allInputs = document.getElementsByClassName('inputs')
        const fullName = allInputs[0]
        const email = allInputs[1]
        const password = allInputs[2]
        const confirmPassword = allInputs[3]


        if (fullName.value === '' || email.value === '' || password.value === '' || confirmPassword.value === '') {
            alert('Please fill all the input fields!');
            return;
        }

        if (fullName.value.length === 1) {
            alert('Please enter your full name with minimum of 2 letters!')
            return;
        }

        if (!email.value.includes('@')) {
            alert('Email must include @ in the format!');
            return;
        }



        if (password.value.length < 8) {
            alert('Please enter a password with a minimum of 8 characters!');
            return;
        }

        if (password.value != confirmPassword.value) {
            alert('Password does not match with confirm password!');
            return;
        }
        try {
            await signupUser(fullName.value, email.value, password.value)
            navigate('/login');


        } catch (error) {
            alert(error);
        }




    }

    return (
        <div className='Body'>
            <div className="cont">
                <span>
                    <h3>Sign up</h3>
                </span>

                <span>
                    <p>Enter full name:</p>
                    <input className='inputs'  type="text" placeholder="Enter full name" />
                </span>

                <span>
                    <p>Email:</p>
                    <input className='inputs'  type="email" placeholder="Enter your email" />
                </span>

                <span>
                    <p>Enter password:</p>
                    <input className='inputs'  type="password" placeholder="Enter your password" />
                </span>

                <span>
                    <p>Confirm password:</p>
                    <input className='inputs'  type="password" placeholder="Confirm your password" />
                </span>

                <br />
                <br />

                <span>
                    <button onClick={signUp}>Sign Up</button>
                </span>

                <br />
                <br />

                <span>
                    <p className="href">
                        Already have an acccount? <a onClick={() => navigate('/login')}>Click here!</a>
                    </p>
                </span>
            </div>
        </div>
    );
}

export default Signup;
