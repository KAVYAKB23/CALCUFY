import React from 'react';
import Header from '../COMPONENTS/Header';
import Footer from '../COMPONENTS/Footer';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



function Analysis() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <p style= {{fontSize:'20px'}}>EXPENSE</p>
            <p className="text-primary" style={{ marginTop: '-20px' }}>₹0.00</p>
          </div>
          <div className="col-md-4 mb-3">
            <p style= {{fontSize:'20px'}}>INCOME</p>
            <p className="text-primary" style={{ marginTop: '-20px' }}>₹0.00</p>
          </div>
          <div className="col-md-4 mb-3">
            <p style= {{fontSize:'20px'}}>TOTAL</p>
            <p className="text-primary" style={{ marginTop: '-20px' }}>₹0.00</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
        <DropdownButton id="dropdown-basic-button" title="EXPENSE OVERVIEW" style={{color:'black'}}>
      <Dropdown.Item href="#/action-1" style={{color:'white'}}>Expense overview</Dropdown.Item>
      <Dropdown.Item href="#/action-2" style={{color:'white'}}>Income overview</Dropdown.Item>
      <Dropdown.Item href="#/action-3" style={{color:'white'}}>Expense flow</Dropdown.Item>
      <Dropdown.Item href="#/action-4" style={{color:'white'}}>Income flow </Dropdown.Item>
      <Dropdown.Item href="#/action-5" style={{color:'white'}}>Account Analysis</Dropdown.Item>
    </DropdownButton>
    </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p style={{ fontSize: '18px', fontFamily: "cursive" }}>
              No analysis this month
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

export default Analysis;
