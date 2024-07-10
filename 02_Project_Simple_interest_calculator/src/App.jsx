import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [amount, setAmount] = useState(0)
  const [interest, setInterest] = useState(0)
  const [year, setYear] = useState(0)
  const [Calamount, setCalamount] = useState(0)


  //logic Simple interest
  const calculate = () =>{
    if(amount === 0 || interest === 0 || year === 0){
      alert("Please Enter the Correct Values......................!")
    }
    else{
      const si = (amount * interest * year)/100
      setCalamount(si)
    }
  } 


  //logic reset
  const reset = () =>{
    window.location.reload();
  }

  return (
    <>
      <div className="flex flex-col bg-gray-200 p-12 border border-white text-black gap-5 rounded-md ">
        <div className="flex content-center flex-col ">
          <h2 className='text-3xl font-bold'>Simple Interest Calculator</h2>
          <p className='text-left'>calculate your simple interest easily :- </p>

        </div>
        <div className="flex flex-col content-center border p-10 border-black bg-green-300">
          <h2 className='font-bold text-2xl'>Rs.{Calamount}</h2>
          <p>Total amount interest</p>
        </div>
        <div className="flex flex-col gap-3">

          <label className='text-left mt-2'>Principal Amount :-</label>
          <input  className="flex p-2 rounded-lg bg-white  text-black border border-black" type="number" 
          placeholder='Enter the principal amount'
          onChange={(e) => setAmount(e.target.value)}/>

          <label className='text-left'>Rate of Interest % :-</label>
          <input  className="flex bg-white   text-black p-2 rounded-lg border border-black" type="number"
          placeholder='Enter Rate of Interest (P.A)'
          onChange={(e) => setInterest(e.target.value)}
          />

          <label className='text-left'>Years :-</label>
          <input  className="flex bg-white text-black p-2 rounded-lg border border-black" type="number" 
          placeholder='Enter Time Period'
          onChange={(e) => setYear(e.target.value)}/>
        </div>

        <div className="text-white flex items-center justify-evenly">
          <button type="button" className='bg-blue-500 hover:bg-gray-700 text-white font-bold  rounded focus:outline-none focus:shadow-outline' onClick = {calculate}>Calculate</button>
          <button type="button" className='bg-gray-500 hover:bg-blue-700 text-white font-bold  rounded focus:outline-none focus:shadow-outline' onClick={reset}>Reset</button>
        </div>
        
      </div>
    </>
  )
}

export default App
