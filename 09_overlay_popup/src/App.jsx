import { useState } from "react";
import Model from "./Model";

function App() {
  const [isActive, setIsActive] = useState(false);
  

  const handler = () =>{
    setIsActive((prev) => !prev)
  }



  return (
    <>
      {!isActive && (
        <div className={`flex min-h-screen justify-center items-center `}>
          <div
            className={`w-full max-w-md h-[400px] bg-white border shadow-lg rounded-lg p-6 flex justify-center items-center`}
          >
            <button onClick={handler} className="bg-blue-500 p-3 rounded-lg hover:bg-blue-400 cursor-pointer">
              Show Offers
            </button>
          </div>
        </div>
      )}

      { isActive &&
        <Model  
        handler={handler}
        />
      }
    </>
  );
}

export default App;
