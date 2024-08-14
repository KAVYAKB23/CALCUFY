import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Reglog() {
  // sign up
  const [userDetails, setUserDetails] = useState({
    Name: '',
    email: '',
    password: ''
  });

  // sign in
  const [signinDetails, setSigninDetails] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Added navigate hook

  const handleSignup = async (e) => {
    e.preventDefault();
    const { Name, email, password } = userDetails;
    if (!Name || !email || !password) {
      toast.info('Please fill the form completely');
    } else {
      const result = await signUpApi(userDetails);
      if (result.status === 200) {
        toast.success('Registration successful');
      } else {
        toast.error('Something went wrong. Please try again later');
      }
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    const { email, password } = signinDetails;
    if (!email || !password) {
      toast.info('Please fill the form completely');
    } else {
      const result = await signinApi({ email, password });
      if (result.status === 200) {
        toast.success('Login successful');
        sessionStorage.setItem('existingUser', JSON.stringify(result.data.existingUser));
        sessionStorage.setItem('token', result.data.token);
        setSigninDetails({
          email: '',
          password: ''
        });
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast.error(result.response.data);
      }
    }
  };

  useEffect(() => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    if (registerBtn && loginBtn) {
      registerBtn.addEventListener('click', () => {
        container.classList.add('active');
      });

      loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
      });
    }

    return () => {
      if (registerBtn && loginBtn) {
        registerBtn.removeEventListener('click', () => {
          container.classList.add('active');
        });

        loginBtn.removeEventListener('click', () => {
          container.classList.remove('active');
        });
      }
    };
  }, []);

  return (
    <div>
      <div className="container" id="container">
        <div className="form-container sign-up">
          <form onSubmit={handleSignup}>
            <h3 className='heading'>Create Account</h3>
            <div className="social-icons">
              <Link className='icons'><FontAwesomeIcon icon={faEnvelope} /></Link>
              <Link className='icons'><FontAwesomeIcon icon={faFacebook} /></Link>
              <Link className='icons'><FontAwesomeIcon icon={faSquareInstagram} /></Link>
            </div>
            <span>Or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              className='form-control'
              value={userDetails.Name}
              onChange={(e) => setUserDetails({ ...userDetails, Name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className='form-control'
              value={userDetails.email}
              onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              className='form-control'
              value={userDetails.password}
              onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleSignin}>
            <h3 className='heading'>Sign In</h3>
            <div className="social-icons">
              <Link className='icons'><FontAwesomeIcon icon={faEnvelope} /></Link>
              <Link className='icons'><FontAwesomeIcon icon={faFacebook} /></Link>
              <Link className='icons'><FontAwesomeIcon icon={faSquareInstagram} /></Link>
            </div>
            <span>or use your email password</span>
            <input
              type="email"
              placeholder="Email"
              className='form-control'
              value={signinDetails.email}
              onChange={(e) => setSigninDetails({ ...signinDetails, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              className='form-control'
              value={signinDetails.password}
              onChange={(e) => setSigninDetails({ ...signinDetails, password: e.target.value })}
            />
            <a href="#">Forget Your Password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h3 className='headings'>Welcome Back!</h3>
              <p>Enter your personal details to use and make your financial freedom</p>
              <button className="hidden" id="login">Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h3 className='headings'>Hello, Friend!</h3>
              <p>Register with your personal details and make your financial freedom</p>
              <button className="hidden" id="register">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </div>
  );
}

export default Reglog;
