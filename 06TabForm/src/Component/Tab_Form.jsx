import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";
import { useState } from "react";

const Tab_Form = () => {
  const [isActive, setIsActive] = useState(0);
  const [theme, setTheme] = useState("light");

  const Tabs = [
    { name: "Profile", element: Profile },
    { name: "Interest", element: Interest },
    { name: "Setting", element: Setting },
  ];

  const ActiveComponent = Tabs[isActive].element;

  return (
    <div className={`flex items-center justify-center h-screen ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
      <div
        className={`flex flex-col border border-gray-300 ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        } w-1/3 h-[550px] rounded-lg shadow-xl shadow-gray-900`}
      >
        {/* Tabs */}
        <div className="flex gap-3 justify-center m-2">
          {Tabs.map((e, index) => (
            <div
              key={index}
              onClick={() => setIsActive(index)}
              className={`relative flex items-center overflow-hidden rounded-[0.9em] border-none bg-[#a370f0] px-5 pr-[3.3em] py-[0.35em] text-[17px] font-medium text-white shadow-[inset_0_0_1.6em_-0.6em_#714da6] transition-all duration-300 ease-in-out hover:shadow-md cursor-pointer ${
                isActive === index ? "bg-[#8b5cf6]" : ""
              }`}
            >
              <span className="mr-4 p-3">{e.name}</span>
              <span className="absolute right-[0.3em] flex h-[2.2em] w-[2.2em] items-center justify-center rounded-[0.7em] bg-white shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] transition-all duration-300 ease-in-out group-hover:w-[calc(100%-0.6em)]">
                <svg
                  className="w-[1.1em] text-[#7b52b9] transition-transform duration-300 ease-in-out group-hover:translate-x-[0.1em]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          ))}
        </div>

        {/* Active Tab Component */}
        <div className="flex justify-center mt-3">
          <ActiveComponent theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </div>
  );
};

export default Tab_Form;
