import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='container-fluid'style={{backgroundColor:' #30afdd',color:'black'}}>
      <div className="row">
        <h6 className='mt-4' style={{ color: 'black' }}>Calcufy</h6>
        <p style={{fontSize:'12px'}}>Easy Money Management</p>
      </div>
      <div className="row">
        <div className="col-md 4" >
          <Link  style={{color:'black',fontSize:'15px',textDecoration:'none'}}>Calcufy Premium</Link>
          <br />
          <Link  style={{color:'black',fontSize:'15px',textDecoration:'none'}}>Calcufy Plus</Link>
          <br />
          <Link  style={{color:'black',fontSize:'15px',textDecoration:'none'}}>Security</Link>
          <br />
          <Link  style={{color:'black',fontSize:'15px',textDecoration:'none'}}>Contact Us</Link>
        </div>
        <div className="col-md 4">
        <Link  style={{color:'black',fontSize:'15px',textDecoration:'none'}}>Terms of Use</Link>
        <br />
        <Link  style={{color:'black',fontSize:'15px',textDecoration:'none'}}>Privacy Policy</Link>
          <br />
          <Link  style={{color:'black',fontSize:'15px',textDecoration:'none'}}>Cookies Policy</Link>
          <br />
        </div>
        <div className="col-md 4">
        <p className='text-light' style={{fontSize:'25px'}}>Contact Us</p>
                    <div className='d-flex mt-2'>
                        <input style={{height:'35px',fontSize:'15px'}} type="text" placeholder='Enter MailId' className='form-control' />
                        <button style={{height:'35px',fontSize:'15px',marginTop:'-2px',textAlign:'center',backgroundColor:'black'}} className='btn ml-2 fs-10'>Subscribe</button>

                    </div>
                    <div className='d-flex mt-3 justify-content-between text-light'>
                        <FontAwesomeIcon style={{color:'black'}} icon={faInstagram} size='m' />
                        <FontAwesomeIcon style={{color:'black'}}icon={faFacebookF} size='m' />
                        <FontAwesomeIcon style={{color:'black'}}icon={faTwitter} size='m' />
                        <FontAwesomeIcon style={{color:'black'}}icon={faLinkedin} size='m' />
                    </div>
        </div>

      </div>
      <div className="row mt-4" style={{textAlign:'center',justifyContent:'center',display:'flex'}}>
        <p style={{fontSize:'15px'}}>©Copyright All rights reserved</p>
      </div>
      
    </div>
  )
}

export default Footer
