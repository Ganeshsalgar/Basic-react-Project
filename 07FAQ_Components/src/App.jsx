import { useState } from "react";

function App() {
  const [isTrue, setIsTrue] = useState(null);

  const handleAns = (index) => {
      setIsTrue((prev) => prev === index ? null : index)
  };
  const faq = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];

  return (
    <div className="flex justify-center min-h-screen items-center border border-red-500">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">All the Answers of your Questions</h1>
        <div>
          {faq.map((item, index) => (
            <div key={index} className="border-b py-2">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => handleAns(index)}>
                <span className="font-semibold">{item.question}</span>
                <span className="text-xl">{isTrue === index ? "−" : "+"}</span>
              </div>
              {isTrue === index && (
                <div className="mt-2 text-gray-700">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
