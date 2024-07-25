import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons/faGooglePlus'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './style.css'; 


function Reglog() {
    return (
        <div>
            <div className="container" id='container'>
                <div className='form-container sign-up'>
                    <form>
                        <h1>Create Account</h1>
                        <div className='social-items'>
                            <FontAwesomeIcon icon={faGooglePlus} />
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faEnvelope} />

                        </div>
                        <input type="text" placeholder='Name' />
                        <input type="Email" placeholder='Email' />
                        <input type="Password" placeholder='Password' />
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
            <div className="container" id='container'>
                <div className='form-container sign-up'>
                    <form>
                        <h1>Sign In</h1>
                        <div className='social-items'>
                            <FontAwesomeIcon icon={faGooglePlus} />
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faEnvelope} />

                        </div>
                        <input type="Email" placeholder='Email' />
                        <input type="Password" placeholder='Password' />
                        <Link>Forget your Password?</Link>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className='toggle-panel toggle-left'>
                            <h1>Welcome back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button className='hidden' id='login'>Sign In</button>
                        </div>
                    </div>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className='toggle-panel toggle-right'>
                            <h1>Hello Friend!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button className='hidden' id='login'>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reglog
