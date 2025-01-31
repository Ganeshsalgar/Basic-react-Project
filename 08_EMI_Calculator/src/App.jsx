import { useState } from "react";

function App() {
  const [isTrue , setIsTrue] = useState(false);

  const [input , setInput] = useState({
    amount:"",
    rate:"",
    year:""
  });

  const [Emi ,setEmi] = useState(0)

  const handleInputChange = (e) => {
    const {name  , value} = e.target
    setInput((prev) => ({ ...prev, [name]: value }));

  }

  const SubmitHandler = () => {
    // console.log("Input Value" , input)
    setIsTrue(true)
    const { amount, rate, year } = input;
    const principal = parseFloat(amount);
    const annualRate = parseFloat(rate);
    const years = parseFloat(year);

    if (isNaN(principal) || isNaN(annualRate) || isNaN(years) || principal <= 0 || annualRate <= 0 || years <= 0) {
      setEmi("Invalid Input");
      return;
    }

    const r = annualRate / (12 * 100); // Convert annual rate to monthly rate
    const n = years * 12; // Convert years to months

    const emiValue = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue.toFixed(2));
    }

  return (
    <>
       <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">
          EMI Calculator
        </h1>
        <div className="flex flex-col">
          <label className="mx-3">Principal Loan Amount</label>
         <div> <input type="text" name="amount" value={input.amount} placeholder="Enter Amount" onChange={handleInputChange} className="w-[300px] border p-2 rounded-lg shadow-lg shadow-gray-200 my-2"/><span className="mx-5">Rs</span></div>
        </div>
        <div className="flex flex-col">
          <label className="my-3">Interest Rate</label>
          <div> <input type="text" name="rate" value={input.rate} placeholder="Enter Interest Rate" onChange={handleInputChange} className="w-[300px] border p-2 rounded-lg shadow-lg shadow-gray-200 my-2" /><span className="mx-5">%</span></div>
        </div>
        <div className="flex flex-col">
          <label className="my-3">Legnth Of Year</label>
          <div><input type="text" placeholder="Enter Years" name="year" value={input.year} onChange={handleInputChange} className="w-[300px] border p-2 rounded-lg shadow-lg shadow-gray-200 my-2"/><span className="mx-5">years</span></div>
        </div>
       {isTrue && <span className="font-bold text-lg py-4 mt-5">Your Monthly EMI is {Emi} Rs</span>}
        <button type="submit" onClick={SubmitHandler} className="w-full bg-blue-500 p-3 mt-5 font-bold rounded-lg hover:bg-blue-300 cursor-pointer">Calculate</button>
      </div>
    </div>
    </>
  );
}

export default App;
