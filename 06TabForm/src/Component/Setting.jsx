const Setting = ({ theme, setTheme }) => {
  return (
    <>
     <div className="flex flex-col gap-5">
     <h2 className="flex text-3xl justify-center">Setting</h2>
    <div className="w-72 p-1 rounded-lg bg-gray-200 shadow-md flex">
      <label className="flex-1 text-center cursor-pointer">
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme === "light"}
          onChange={() => setTheme("light")}
          className="hidden peer"
        />
        <span className="block py-2 rounded-lg text-gray-700 peer-checked:bg-white peer-checked:font-semibold transition-all">
          Light
        </span>
      </label>

      <label className="flex-1 text-center cursor-pointer">
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === "dark"}
          onChange={() => setTheme("dark")}
          className="hidden peer"
        />
        <span className="block py-2 rounded-lg text-gray-700 peer-checked:bg-white peer-checked:font-semibold transition-all">
          Dark
        </span>
      </label>
    </div>
     </div>
    </>
  );
};

export default Setting;
