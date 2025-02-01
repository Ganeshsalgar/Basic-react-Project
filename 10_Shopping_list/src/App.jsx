import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  // Predefined suggestions
  const suggestions = ["Milk", "Eggs", "Bread", "Butter", "Cheese", "Tomatoes"];

  // Handle input changes & show suggestions
  const handleValue = (e) => {
    setInput(e.target.value);
    setIsActive(e.target.value.trim() !== ""); // Show suggestions only if input is not empty
  };

  // Add item to the list
  const handleAddItem = () => {
    if (input.trim() !== "" && !items.includes(input)) {
      setItems((prev) => [...prev, input]); // Add new item
      setInput(""); // Clear input field
      setIsActive(false); // Hide suggestions after adding
    }
  };

  // Remove item from the list
  const handleRemoveItem = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Toggle check/uncheck item
  const handleCheckItem = (item) => {
    setCheckedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  // Handle clicking on a suggested item
  const handleSelectSuggestion = (suggestion) => {
    setInput(suggestion);
    setIsActive(false); // Hide suggestions after selecting
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-300">
      <div className="max-w-md bg-white w-full flex justify-center border shadow-lg shadow-gray-700 h-[700px]">
        <div className="p-5 mt-5 w-full">
          <h1 className="text-2xl p-5 font-bold text-center">My Shopping List</h1>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={handleValue}
              placeholder="Enter your item"
              className="w-full border-y border-l px-3 py-1 rounded-md"
            />
            <button
              className="bg-orange-500 ml-[-10px] p-2 px-6 rounded-r-lg"
              onClick={handleAddItem}
            >
              Add
            </button>
          </div>

          {/* Suggested Items (Visible when typing) */}
          {isActive && input && (
            <div className="border-x border-b rounded-md p-3 bg-gray-100 mt-2">
              <ul className="p-2">
                {suggestions
                  .filter((s) => s.toLowerCase().includes(input.toLowerCase()))
                  .map((s, index) => (
                    <li
                      key={index}
                      className="border-b pb-1 pl-5 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleSelectSuggestion(s)}
                    >
                      {s}
                    </li>
                  ))}
              </ul>
            </div>
          )}

          {/* Display Shopping List */}
          <ul className="mt-5">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b py-2 px-3 cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={checkedItems.includes(item)}
                    onChange={() => handleCheckItem(item)}
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span className={checkedItems.includes(item) ? "line-through text-gray-400" : ""}>
                    {item}
                  </span>
                </div>
                <span
                  className="text-red-500 font-bold cursor-pointer"
                  onClick={() => handleRemoveItem(index)}
                >
                  X
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
