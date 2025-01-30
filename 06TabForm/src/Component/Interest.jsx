const Interest = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h2 className="flex text-3xl justify-center">Interest</h2>
        <div>
          <h3 className="mb-5 text-lg ">
            Choose technology:
          </h3>
          <ul className="grid w-full gap-6 md:grid-cols-3">
            {/* React.js */}
            <li>
              <input
                type="checkbox"
                id="react-option"
                className="hidden peer"
              />
              <label
                htmlFor="react-option"
                className="flex flex-col items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer 
            dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 
            dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 
            peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <svg
                  className="mb-2 w-7 h-7 text-sky-500"
                  fill="currentColor"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4z" />
                </svg>
                <span className="text-sm font-medium">React.js</span>
              </label>
            </li>

            {/* Vue.js */}
            <li>
              <input type="checkbox" id="vue-option" className="hidden peer" />
              <label
                htmlFor="vue-option"
                className="flex flex-col items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer 
            dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-500 
            dark:peer-checked:border-green-500 hover:text-gray-600 dark:peer-checked:text-gray-300 
            peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <svg
                  className="mb-2 w-7 h-7 text-green-500"
                  fill="currentColor"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M356.5 32H448L224 480 0 32H91.5L224 271.8 356.5 32z" />
                </svg>
                <span className="text-sm font-medium">Vue.js</span>
              </label>
            </li>

            {/* Angular */}
            <li>
              <input
                type="checkbox"
                id="angular-option"
                className="hidden peer"
              />
              <label
                htmlFor="angular-option"
                className="flex flex-col items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer 
            dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-red-500 
            dark:peer-checked:border-red-500 hover:text-gray-600 dark:peer-checked:text-gray-300 
            peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <svg
                  className="mb-2 w-7 h-7 text-red-500"
                  fill="currentColor"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 32L0 480h448L224 32zm0 77.2L373.2 429H280l-56-112-56 112H74.8L224 109.2zm0 133.2L283.2 429H164.8L224 242.4z" />
                </svg>
                <span className="text-sm font-medium">Angular</span>
              </label>
            </li>
          </ul>

          <div className="w-72 p-1 mt-20 rounded-lg bg-gray-200 shadow-md flex">
            <label className="flex-1 text-center cursor-pointer">
              <input
                type="radio"
                name="radio"
                defaultChecked
                className="hidden peer"
              />
              <span className="block py-2 rounded-lg text-gray-700 peer-checked:bg-white peer-checked:font-semibold transition-all">
                Student
              </span>
            </label>
            <label className="flex-1 text-center cursor-pointer">
              <input type="radio" name="radio" className="hidden peer" />
              <span className="block py-2 rounded-lg text-gray-700 peer-checked:bg-white peer-checked:font-semibold transition-all">
                Developer
              </span>
            </label>
            <label className="flex-1 text-center cursor-pointer">
              <input type="radio" name="radio" className="hidden peer" />
              <span className="block py-2 rounded-lg text-gray-700 peer-checked:bg-white peer-checked:font-semibold transition-all">
                Freelancer
              </span>
            </label>
          </div>

          <button className="w-full border-2 my-10 text-xl text-white bg-blue-500 rounded-2xl py-2 hover:bg-blue-400">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Interest;
