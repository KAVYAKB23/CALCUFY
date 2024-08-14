import React from 'react';
import Header from '../COMPONENTS/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';






function Home() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <>
    <Header/>
    <div className='container-fluid' style={{marginTop:'5%',overflow:'hidden'}}>
      <div className="row">
        <div className="col-md 5" style={{marginTop:'5%'}}>
        <h4>Let's Calculate your expense with <span style={{ color:'#30afdd',fontSize:'100%'}}>Calcufy</span></h4> 
        <p>Track all your expenses here..........</p>
        <button className='mt-3' style={{color:' #30afdd',backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',}} onClick={handleGetStarted} >Get Started <FontAwesomeIcon icon={faArrowRight} beatFade /></button>
        </div>
        <div className="col-md 7">
        <img src="https://www.pngall.com/wp-content/uploads/13/Growth-Graph-No-Background.png" alt="image" />
        </div>
      </div>
      
    </div>

    </>
  )
}

export default Home
