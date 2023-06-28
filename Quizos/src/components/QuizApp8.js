import React, { useState } from "react";
import "../styles/QuizApp.css";

const QuizApp8 = () => {
  const [questions] = useState([
    {
      question: "What does DApp stand for?",
      options: [
        "Decentralized Application",
        "Digital Application",
        "Distributed Application",
        "Decentralized Asset",
      ],
      answer: "Decentralized Application",
    },
    {
      question: "Which blockchain platform is known for its support of DApps?",
      options: ["Ethereum", "Bitcoin", "Ripple", "Litecoin"],
      answer: "Ethereum",
    },
    {
      question: "What is the primary advantage of DApps over traditional centralized applications?",
      options: [
        "Censorship resistance",
        "Faster transaction processing",
        "Higher scalability",
        "Lower energy consumption",
      ],
      answer: "Censorship resistance",
    },
    {
      question: "Which programming language is commonly used for developing DApps on Ethereum?",
      options: ["Solidity", "JavaScript", "Python", "Java"],
      answer: "Solidity",
    },
    {
      question: "Which famous DApp is known for decentralized finance (DeFi) on Ethereum?",
      options: ["Uniswap", "Twitter", "Netflix", "PayPal"],
      answer: "Uniswap",
    },
    {
      question: "What is the role of smart contracts in DApps?",
      options: [
        "Enforcing the rules and logic of the application",
        "Managing user interface and design",
        "Securing user data and privacy",
        "Processing financial transactions",
      ],
      answer: "Enforcing the rules and logic of the application",
    },
    {
      question: "What is the most popular web browser extension wallet for interacting with DApps?",
      options: ["MetaMask", "Ledger", "Trezor", "MyEtherWallet"],
      answer: "MetaMask",
    },
    {
      question: "Which sector has seen significant growth in DApp adoption?",
      options: ["Decentralized Finance (DeFi)", "Gaming", "Supply Chain", "Social Media"],
      answer: "Decentralized Finance (DeFi)",
    },
    {
      question: "What is the key principle behind DApps?",
      options: [
        "Eliminating intermediaries",
        "Increasing transaction speed",
        "Centralized control",
        "Centralized data storage",
      ],
      answer: "Eliminating intermediaries",
    },
    {
      question: "Which blockchain platform is known for its support of DApps and smart contracts in multiple programming languages?",
      options: ["EOS", "Stellar", "Cardano", "TRON"],
      answer: "EOS",
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

export default QuizApp8;
