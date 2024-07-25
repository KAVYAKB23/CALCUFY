import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';


function PageNotFound() {
  return (
    <>
   
    <div style={{ height: "70vh", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <img src="./Images/pagenotfound.webp" alt="Page Not Found" style={{ maxWidth: "100%", maxHeight: "100%" }} />
      <Link to="/" className='text-primary' style={{ marginTop: "20px", textDecoration: "none", color: "blue", fontSize: "18px" }}>
        <FontAwesomeIcon icon={faArrowLeftLong} style={{ marginRight: "8px" }} />
        Back to Home
      </Link>
    </div>
    </>
  );
}

export default PageNotFound;

