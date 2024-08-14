import React, { useState } from 'react'
import './Calc.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



function Calculator() {
    const [result,setResult]=useState("");

    const handleClick=(e)=>{
        setResult(result.concat(e.target.value))
    }
    const clear=()=>{
        setResult("")
    }
    const backspace=()=>{
        setResult(result.slice(0,-1));
    }
    const calculate=()=>{
        try{
            setResult(eval(result).toString());
        }catch{
            setResult("Error")
        }
       
    }

  return (
    <div className='page' style={{marginTop:'3%'}}>
      <div className='notes' >
        <div className="row">
          <div className="col-md 4">
            <Link style={{ textDecoration: 'none' }}>INCOME</Link>
           
          </div>
          <div className="col-md 4">
          <Link style={{ textDecoration: 'none' }}>EXPENSE</Link>
          </div>
          <div className="col-md 4">
          <Link style={{ textDecoration: 'none' }}>TRANSFER</Link>
          </div>
        </div>
      <div className='d-flex w-100'>
      
      <Button variant="secondary" size="sm" style={{ width: '50%' }} >
        ACCOUNTS
      </Button>
      <Button variant="secondary w-50" size="sm" style={{ width: '50%' }}>
        CATEGORY
      </Button>
    </div>
        <div className="row" >
        
          <div className="col-md 12">
          <div className='parent'>
        <FloatingLabel controlId="floatingTextarea2" label=" Add Notes" >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100%'}}
        />
      </FloatingLabel>
        </div>
          </div>
          
        </div>
        </div>
    
      <div className='main'>
        <form>
            <input className='calc'type="text" value={result}/>
        </form>
        <div className="keypad">
            <button className='highlight' onClick={clear} id='clear'>Clear</button>
            <button className='highlight'onClick={backspace} id='backspace'> C </button>
            <button className='highlight'value='/' onClick={handleClick}>&divide;</button>
            <button value='7'onClick={handleClick}>7</button>
            <button value='8'onClick={handleClick}>8</button>
            <button value='9'onClick={handleClick}>9</button>
            <button className='highlight' value='*'onClick={handleClick}>&times;</button>
            <button value='4'onClick={handleClick}>4</button>
            <button value='5'onClick={handleClick}>5</button>
            <button value='6'onClick={handleClick}>6</button>
            <button className='highlight' value='-'onClick={handleClick}>&ndash;</button>
            <button value='1'onClick={handleClick}>1</button>
            <button value='2'onClick={handleClick}>2</button>
            <button value='3'onClick={handleClick}>3</button>
            <button className='highlight' value='+'onClick={handleClick}>+</button>
            <button value='0'onClick={handleClick}>0</button>
            <button value='.'onClick={handleClick}>.</button>
            <button  className='highlight'onClick={calculate} id="result">=</button>
        </div>
      </div>
      <div className='notes' >
       <div  className='d-flex w-100'>
        <Button variant="secondary" size="sm" style={{ width: '50%' }}>
         SAVE
        </Button>{' '}
        <Button variant="secondary" size="sm" style={{ width: '50%' }}>
          CANCEL
        </Button>
      </div>
      </div>
    
    </div>
  )
}

export default Calculator
