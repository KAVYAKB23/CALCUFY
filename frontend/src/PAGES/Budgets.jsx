import React from 'react';
import Header from '../COMPONENTS/Header';
import Footer from '../COMPONENTS/Footer';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';



function Budgets() {
  const categories = [
    "Baby", "Beauty", "Bills", "Car", "Clothing", "Education", "Electronics",
    "Entertainment", "Food", "Health", "Home", "Insurance", "Shopping", 
    "Social", "Sport", "Tax", "Telephone", "Transportation"
  ];

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 text-center mb-3">
            <p style= {{fontSize:'20px'}}>TOTAL BUDGET</p>
            <p className="text-primary" style={{ marginTop: '-20px' }}>₹0.00</p>
          </div>
          <div className="col-md-6 text-center mb-3">
            <p style= {{fontSize:'20px'}}>TOTAL SPENT</p>
            <p className="text-primary" style={{ marginTop: '-20px' }}>₹0.00</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <p style={{ fontSize: '18px', fontFamily: "cursive" }}>
              Currently, no budget is applied for this month. Set budgets-limits for this month, or copy your budget-limits from past months
            </p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 text-center">
            <h6 style={{ fontSize: '18px', fontFamily: "cursive", textDecoration: 'underline' }}>
              Not budgeted this month
            </h6>
          </div>
        </div>

        {categories.map((category) => (
          <div className="row align-items-center my-2" key={category}>
            <div className="col-md-5 offset-md-1">
              <p>{category}</p>
            </div>
            <div className="col-md-6 text-end">
              <button className="btn btn-primary" style={{ fontSize: '18px' }}>
                Set budget
              </button>
            </div>
          </div>
          
        ))}
      </div>
      <Link to="/calculator">
              <Button className="btn btn-primary" style={{ fontWeight: 'bold', marginLeft: '90%',marginBottom:'5%',marginTop:'5%' }}>
                +
              </Button>
            </Link>
      <Footer />
    </div>
  );
}

export default Budgets;
