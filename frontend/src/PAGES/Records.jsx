import React from 'react';
import Header from '../COMPONENTS/Header';
import Footer from '../COMPONENTS/Footer';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



function Records() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <p style={{fontSize:'20px'}}>EXPENSE</p>
            <p className="text-primary" style={{ marginTop: '-20px' }}>₹0.00</p>
          </div>
          <div className="col-md-4 mb-3">
            <p  style= {{fontSize:'20px'}} >INCOME</p>
            <p className="text-primary" style={{ marginTop: '-20px' }}>₹0.00</p>
          </div>
          <div className="col-md-4 mb-3">
            <p style= {{fontSize:'20px'}}>TOTAL</p>
            <p className="text-primary" style={{ marginTop: '-20px' }}>₹0.00</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p style={{ fontSize: '18px', fontFamily: "cursive" }}>
              No records in this month. Tap + to add new expense or income
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
          <Link to="/calculator">
              <Button className="btn btn-primary" style={{ fontWeight: 'bold', marginRight: '10%' }}>
                +
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Records;
