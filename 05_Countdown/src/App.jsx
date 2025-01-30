import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [hours ,setHours] =useState(0);
  const [minites ,setMinites] =useState(0);
  const [seconds ,setSeconds] =useState(0);
  const [Timer ,setTimer] =useState(0);
  const [isPuase , setIsPause] = useState(false);
  const Start = () => {
    setIsStart(true);
  };
  const ReStart = () => {
    setIsStart(false);
    setHours(0);
    setMinites(0);
    setSeconds(0);
    clearInterval(Timer);
  };

  const HandleTime = (e) =>{
      // console.log(e.target.id , e.target.value)
      const value = parseInt(e.target.value);
      const id = (e.target.id);
      if(id === "hours"){
        setHours(value);
      }
      else if(id === 'minites'){
        setMinites(value)
      }
      else{
        setSeconds(value)
      }
  }

  const runnerTimer = (sec , min  , tid) =>{
    if(sec > 0){
      setSeconds((s) => s - 1);

    }
    else if(sec === 0 && min > 0){
      setMinites((m) => m - 1);
      setSeconds(59);
    }
    else{
      setHours((h) => h - 1)
      setMinites(59);
      setSeconds(59);
    }


    if(hours === 0 && minites === 0 && seconds ===  0){
      setHours(0);
      setMinites(0);
      setSeconds(0);
      clearInterval(tid)
      setTimer(() => {
        setTimer(false)
      } , 5000)
    }
  }


  const handlePuase = () => {
      setIsPause(true)
      clearInterval(Timer);
  }

  const handleResume  = () => {
      setIsPause(false)
      runnerTimer(seconds , minites , hours)
  }  


// console.log(hours , minites , seconds)

useEffect(()=>{
  let tid
  if(isStart){ tid = setInterval(() => {
    runnerTimer(seconds ,minites , tid)
  } , 1000)
  setTimer(tid);

}



return () => {
  clearInterval(tid);
}
  
}, [isStart , hours , minites , seconds])


  return (
    <>
      <div className="border-2 p-10 rounded-lg ">
        {!isStart && (
          <div className="">
            <h1 className="text-xl font-bold gap-2 mb-12">
              CountDown Container
            </h1>
            <div className="p-5 m-10">
              <div className="">
                <input
                  type="text"
                  id="hours"
                  onChange={HandleTime}
                  className="border m-10 w-16 h-16 text-center text-2xl bg-white text-gray-700"
                  placeholder="HH"
                />
                <input
                  type="text"
                  id="minites"
                  onChange={HandleTime}
                  className="border m-10  w-16 h-16 text-center text-2xl bg-white text-gray-700"
                  placeholder="MM"
                />
                <input
                  type="text"
                  id="seconds"
                  onChange={HandleTime}
                  className="border m-10  w-16 h-16 text-center text-2xl bg-white text-gray-700"
                  placeholder="SS"
                />
              </div>

              <button
                className="m-1.5 w-[200px] h-[60px] text-2xl mt-10"
                onClick={Start}
              >
                Start
              </button>
            </div>
          </div>
        )}

        {isStart && (
          <div>
            <h1 className="font-bold">CountDown Container</h1>
            <div className="flex text-7xl items-center justify-center p-5 m-5">
              <div className="m-5">{hours < 10 ? `0${hours}` : hours} </div>
              <span>:</span>
              <div className="m-5">{minites < 10 ? `0${minites}` : minites}</div>
              <span>:</span>
              <div className="m-5">{seconds < 10 ? `0${seconds}` : seconds}</div>
            </div>
            <div className="p-10 mx-10">
             {
              !isPuase &&  <button className="mx-14 w-[200px] h-[60px]" onClick={handlePuase}> Pause</button>
             }
             {
               isPuase &&  <button className="mx-14 w-[200px] h-[60px]" onClick={handleResume}> Resume</button>
             }
              <button className="w-[200px] h-[60px]" onClick={ReStart}>
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
