import './App.css'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {
  //state to hold values from input field
  const [principle,setPrinciple]= useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [interest,setInterest] = useState(0)
  //for conditional rendering
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)

  const validate = (e) =>{
    //to get value from input box
    // console.log(e.target.value);
    // console.log(e.target.name);
    let name = e.target.name 
    let value = e.target.value
  console.log(!!value.match(/^[0-9]*$/));

   if(!!value.match(/^[0-9]*$/)){
    if(name == 'principle'){
      setPrinciple(value)
      setIsPrinciple(true)
    }
    else if(name == 'rate'){
      setRate(value)
      setIsRate(true)
    }
    else{
      setYear(value)
      setIsYear(true)
    }
   }
   else{
    if(name == 'principle'){
      // setPrinciple(value)
      setIsPrinciple(false)
    }
    else if(name == 'rate'){
      // setRate(value)
      setIsRate(false)
    }
    else{
      // setYear(value)
      setIsYear(false)
    }
   }
  }
  const handleReset = () =>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }

  const calculate = () =>{
   setInterest((principle*rate*year)/100)
  }
  // console.log('principle',principle);
  // console.log('rate',rate);
  // console.log('year',year);

  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{width:'100', height:'100vh'}}>
      <div className='bg-light p-5 rounded' style={{width:'500px'}}>
    <h2>Simple Interest App</h2>
    <p>Calculate your simple interest Easily</p>

    <div className='mt-5 flex-column rounded shadow bg-warning d-flex justify-content-center align-items-center p-4 '>
<h2 className='fs-1 fw-bolder'>₹ {interest}</h2>
<p>Total simple interest</p>
    </div>
    <form className='mt-5'>
      <div className="mb-3">
      <TextField id="outlined-basic" label="₹ Principle amount" variant="outlined" name='principle' onChange={(e)=>validate(e)} value={principle || ""} className='w-100'/>
      {!isPrinciple && 
      <p className='text-danger text-start'>invalid input </p>}
      </div>
      <div className="mb-3"> 
      <TextField id="outlined-basic" label="Rate of interest(p.a)%" variant="outlined"  onChange={(e)=>validate(e)} name='rate' value={rate || ""} className='w-100'/>
      {!isRate &&
        <p className='text-danger text-start'>invalid input </p>}

      </div>
      <div className="mb-3">
      <TextField id="outlined-basic" label="Year (yr)" variant="outlined" name='year' value={year || ""} onChange={(e)=>validate(e)} className='w-100'/>
      {!isYear &&
        <p className='text-danger text-start'>invalid input </p>}

      </div>
      <div className='d-flex justify-content-between w-100 mt-4'>
      <Button variant="contained" disabled={isPrinciple && isRate && isYear? false:true} color='success' style={{width:'190px' , height:'60px'}} onClick={calculate}>CALCULATE</Button>
      <Button variant="outlined" style={{width:'190px' , height:'60px'}} onClick={handleReset}>RESET</Button>
      </div>

    </form>
    
    </div>
    </div>
    </>
  )
}

export default App