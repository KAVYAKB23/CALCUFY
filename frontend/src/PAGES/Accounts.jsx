import React from 'react';
import Header from '../COMPONENTS/Header';
import Footer from '../COMPONENTS/Footer';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Accounts() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <div className="row mb-4 text-center">
          <div className="col-12">
            <p style= {{fontSize:'20px'}}>Overall</p>
          </div>
        </div>
        <div className="row text-center mb-4">
          <div className="col-md-6">
            <p style= {{fontSize:'20px'}} >Expense so far</p>
            <p className="text-primary">₹0.00</p>
          </div>
          <div className="col-md-6">
            <p style= {{fontSize:'20px'}}>Income so far</p>
            <p className="text-primary">₹0.00</p>
          </div>
        </div>
        <div className="row text-center mb-4">
          <div className="col-12">
            <p style= {{fontSize:'20px'}}>All accounts balance: <span className="text-primary">₹0.00</span></p>
          </div>
        </div>
        <div className="row text-center mb-4">
          <div className="col-12">
            <p style= {{fontSize:'20px'}}>Accounts</p>
           
          </div>
        </div>
      </div>
      <Link to="/calculator">
              <Button className="btn btn-primary" style={{ fontWeight: 'bold', marginLeft: '90%',marginBottom:'5%',marginTop:'5%',color:'black' }}>
                +
              </Button>
            </Link>
      <Footer />
    </div>
  );
}

export default Accounts;
