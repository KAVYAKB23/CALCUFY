import { faArrowLeftLong, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';


function ContactUs() {
  return (
    <div className="container mt-5">
      <h5 className='d-flex justify-content-center align-items-center' style={{color:' #30afdd'}}>Contact Us</h5>
      <p style={{fontSize:'18px',marginTop:'4%'}}>We're here to assist with any questions or concerns regarding our Calcufy application. Reach out to us for support and guidance. Your feedback helps us improve!</p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{fontSize:'20px'}}>Name</label>
          <input type="text" className="form-control" id="name" style={{ width: '500px' }}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label"  style={{fontSize:'20px'}}>Email</label>
          <input type="email" className="form-control" id="email"  style={{ width: '500px' }}/>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label"  style={{fontSize:'20px'}}>Message</label>
          <textarea className="form-control" id="message" rows="3" style={{ width: '500px' }}></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '250px' }}>Submit</button>
      </form>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '10vh',marginBottom:'4px' }}>
      <Link to="/login" className='text-primary' style={{ margin: " 0 20px", textDecoration: "none", color: "blue", fontSize: "18px" }}>
        <FontAwesomeIcon icon={faArrowLeftLong} style={{ marginRight: "8px" }} />
        Back to Home
      </Link>
      <Link to="/" className='text-primary' style={{ margin: " 0 20px", textDecoration: "none", color: "blue", fontSize: "18px" }}>
      Next
      <FontAwesomeIcon icon={faArrowRight}  style={{ marginLeft: "10px" }}/>
        
      </Link>
     
      </div>
    </div>
  );
}

export default ContactUs;
