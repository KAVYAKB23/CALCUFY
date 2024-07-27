import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';


function Reglog() {
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
          <form>
            <h3 className='heading'>Create Account</h3>
            <div className="social-icons">
                <Link className='icons'><FontAwesomeIcon  icon={faEnvelope} /></Link>
                <Link className='icons' ><FontAwesomeIcon icon={faFacebook} /></Link>
                <Link className='icons'><FontAwesomeIcon  icon={faSquareInstagram} /></Link>
            
           
            </div>
            <span>Or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h3 className='heading'>Sign In</h3>
            <div className="social-icons">
            <Link className='icons'><FontAwesomeIcon  icon={faEnvelope} /></Link>
                <Link className='icons'><FontAwesomeIcon icon={faFacebook} /></Link>
                <Link className='icons'><FontAwesomeIcon  icon={faSquareInstagram} /></Link>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
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
    </div>
  );
}

export default Reglog;