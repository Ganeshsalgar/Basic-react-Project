import { useState } from "react";

const Model = ({handler }) => {
  const [isaccept, setIsAccept] = useState(false);

  const handleAccept = () => {
    setIsAccept(true);
  };
  return (
    <>
      {!isaccept && (
        <div className="flex min-h-screen justify-center items-center bg-gray-700">
          <div className="w-full max-w-md h-[400px] border shadow-lg rounded-lg p-6 bg-white">
            <button
              onClick={handler}
              className=" bg-red-400 border px-1 rounded-sm hover:cursor-pointer hover:bg-red-300"
            >
              X
            </button>
            <div className="p-5 mt-20">
              <h2 className="">
                Click the below button for getting a amazing Offers
              </h2>
              <div className="gap-5">
               
                <button
                  className="py-3 px-5  bg-blue-500 border  rounded-sm hover:cursor-pointer  hover:bg-blue-400"
                  onClick={handleAccept}
                >
                  Accept Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isaccept && <div className="flex min-h-screen justify-center items-center text-3xl bg-gray-700">Offer Is Accept Successfully</div>}
    </>
  );
};

export default Model;
