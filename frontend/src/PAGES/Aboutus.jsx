import React from 'react'
import Header from '../COMPONENTS/Header'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Footer from '../COMPONENTS/Footer'


function Aboutus() {
  return (
    <div>
        <Header/>
      <div>
        <h4 className=' d-flex mt-4 justify-content-center align-items-center'>About Us</h4>
        <p style={{fontSize:'18px', marginTop: '5px', marginLeft: '2rem', marginRight: '2rem', textAlign: 'justify'}} className='mt-5'>Welcome to <span style={{ color:'#30afdd'}}>Calcufy</span>, where financial clarity meets simplicity. Our mission is to empower individuals and businesses to take control of their financial future through intuitive expense tracking. With a focus on user-friendly design and powerful analytics, we provide the tools you need to manage your spending, set budgets, and achieve your financial goals effortlessly. Whether you're looking to keep track of daily expenses or analyze trends for better financial decisions,Calcufy is here to guide you every step of the way. Join us on a journey toward financial growth and peace of mind.
        At Expense Tracker, our mission is to empower individuals and businesses with the tools they need to take control of their finances. We understand that managing expenses can be daunting, especially when juggling multiple financial commitments. That's why we’ve developed a comprehensive, user-friendly platform designed to simplify budgeting, track spending, and help you achieve your financial goals with ease.</p>
<p style={{fontSize:'18px', marginTop: '5px', marginLeft: '2rem', marginRight: '2rem', textAlign: 'justify'}}>
Our team of financial experts and tech enthusiasts is dedicated to creating a solution that not only meets your needs but also anticipates them. We leverage advanced technology and intuitive design to provide a seamless experience, allowing you to effortlessly monitor your income, categorize expenses, and generate insightful reports. Our commitment to innovation ensures that Expense Tracker evolves with the ever-changing financial landscape.
</p>
<p style={{fontSize:'18px', marginTop: '5px', marginLeft: '2rem', marginRight: '2rem', textAlign: 'justify'}}>
We believe that financial literacy and management should be accessible to everyone. Whether you’re a student, a professional, or a business owner, our platform offers personalized features and actionable insights tailored to your unique financial situation. Join us on our journey to make financial management straightforward, efficient, and ultimately, a positive experience for all.

</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '10vh',marginBottom:'4px' }}>
      <Link to="/" className='text-primary' style={{ margin: " 0 20px", textDecoration: "none", color: "blue", fontSize: "18px" }}>
        <FontAwesomeIcon icon={faArrowLeftLong} style={{ marginRight: "8px" }} />
        Back to Home
      </Link>
      <Link to="/" className='text-primary' style={{ margin: " 0 20px", textDecoration: "none", color: "blue", fontSize: "18px" }}>
      Next
      <FontAwesomeIcon icon={faArrowRight}  style={{ marginLeft: "10px" }}/>
        
      </Link>
     
      </div>
      <Footer/>
      </div>
  )
}

export default Aboutus
