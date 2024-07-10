import { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState('');

  // Logic
  const Clcbmi = () => {
    if (height === 0 || weight === 0) {
      alert("Please enter valid height and weight.");
    } else {
      const result = (weight * 703) / (height * height);
      setBmi(result.toFixed(2));
      if (result < 18.5) {
        setMessage("You are underweight");
      } else if (result >= 18.5 && result < 24.9) {
        setMessage("You are normal weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  // Reload
  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="flex text-white bg-gray-700 p-28 flex-col gap-4 text-center border border-white">
        <div className="text-white text-center">
          <h1>BMI Calculator</h1>
        </div>
        <div>
          <label className='flex content-start ml-4 pb-1'>Height (in cm):</label>
          <input
            type="number"
            className='flex gap-3 px-3 py-1 pr-32 rounded-md'
            placeholder='Enter height'
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>
        <div>
          <label className='flex content-start ml-4 pb-1'>Weight (in kg):</label>
          <input
            type="number"
            className='flex gap-3 pr-32 px-3 py-1 rounded-md'
            placeholder='Enter weight'
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col">
          <button className='mt-5 bg-blue-600' type="button" onClick={Clcbmi}>Calculate</button>
          <button className='mt-3' type="button" onClick={reload}>Reload</button>
        </div>
        <div className="center">
          <h2>Your BMI is: {bmi}</h2>
          <div>{message}</div>
        </div>
      </div>
    </>
  );
}

export default App;
