import React, { useState } from "react";
import "../styles/QuizApp.css";

const QuizApp6 = () => {
  const [questions] = useState([
    {
      question: "Which was the first decentralized cryptocurrency?",
      options: ["Bitcoin", "Ethereum", "Ripple", "Litecoin"],
      answer: "Bitcoin",
    },
    {
      question: "Who is credited with the invention of Bitcoin?",
      options: ["Satoshi Nakamoto", "Vitalik Buterin", "Charlie Lee", "Roger Ver"],
      answer: "Satoshi Nakamoto",
    },
    {
      question: "What is the total supply of Bitcoin?",
      options: ["21 million", "100 million", "1 billion", "10 billion"],
      answer: "21 million",
    },
    {
      question: "Which cryptocurrency introduced the concept of smart contracts?",
      options: ["Ethereum", "Bitcoin", "Ripple", "Litecoin"],
      answer: "Ethereum",
    },
    {
      question: "What is the symbol for the cryptocurrency Ethereum?",
      options: ["BTC", "ETH", "XRP", "LTC"],
      answer: "ETH",
    },
    {
      question: "Which cryptocurrency uses the XRP Ledger?",
      options: ["Bitcoin", "Ethereum", "Ripple", "Litecoin"],
      answer: "Ripple",
    },
    {
      question: "What is the maximum supply of Litecoin?",
      options: ["84 million", "100 million", "1 billion", "10 billion"],
      answer: "84 million",
    },
    {
      question: "Which cryptocurrency is known for its focus on privacy?",
      options: ["Bitcoin", "Ethereum", "Monero", "Litecoin"],
      answer: "Monero",
    },
    {
      question: "What is the circulating supply of Tether (USDT)?",
      options: ["10 billion", "100 billion", "1 trillion", "10 trillion"],
      answer: "10 billion",
    },
    {
      question: "Which cryptocurrency introduced the concept of Proof of Stake (PoS)?",
      options: ["Cardano", "Bitcoin", "Ethereum", "Stellar"],
      answer: "Cardano",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setSelectedOption("");
    setCurrentQuestion(currentQuestion + 1);
  };

  const renderOptions = () => {
    return questions[currentQuestion].options.map((option, index) => (
      <div key={index}>
        <input
          type="radio"
          id={option}
          name="option"
          value={option}
          checked={selectedOption === option}
          onChange={() => handleOptionSelect(option)}
        />
        <label htmlFor={option}>{option}</label>
      </div>
    ));
  };

  const renderQuiz = () => {
    if (currentQuestion >= questions.length) {
      return (
        <div className="quiz-container">
          <h2 className="quiz-title">Quiz completed!</h2>
          <p className="quiz-result">
            You answered {correctAnswers} out of {questions.length} questions
            correctly.
          </p>
        </div>
      );
    }

    return (
      <div className="quiz-container">
        <h2 className="quiz-title">Question {currentQuestion + 1}</h2>
        <p className="quiz-question">{questions[currentQuestion].question}</p>
        {renderOptions()}
        <button
          className="quiz-next-btn"
          onClick={handleNextQuestion}
          disabled={!selectedOption}
        >
          Next Question
        </button>
      </div>
    );
  };

  return <div className="app-container">{renderQuiz()}</div>;
};

export default QuizApp6;
