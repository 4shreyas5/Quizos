import React, { useState } from "react";
import "../styles/QuizApp.css";

const QuizApp9 = () => {
  const [questions] = useState([
    {
      question: "What does the term 'DeFi' stand for?",
      options: [
        "Decentralized Finance",
        "Digital Finance",
        "Distributed Finance",
        "Decentralized Futures",
      ],
      answer: "Decentralized Finance",
    },
    {
      question:
        "Which blockchain network is commonly associated with the development of DeFi applications?",
      options: ["Bitcoin", "Ethereum", "Tezos", "Cardano"],
      answer: "Ethereum",
    },
    {
      question: "What is the primary goal of DeFi?",
      options: [
        "Enhancing traditional banking systems",
        "Eliminating the need for cryptocurrencies",
        "Centralizing financial transactions",
        "Democratizing access to financial services",
      ],
      answer: "Democratizing access to financial services",
    },
    {
      question: "Which of the following is NOT a common DeFi application?",
      options: [
        "Decentralized Exchange (DEX)",
        "Lending and Borrowing Platforms",
        "Stablecoin",
        "Centralized Bank",
      ],
      answer: "Centralized Bank",
    },
    {
      question: "What is the concept of 'yield farming' in DeFi?",
      options: [
        "Growing crops using blockchain technology",
        "Earning interest or rewards by providing liquidity to DeFi protocols",
        "Digital farming of non-fungible tokens (NFTs)",
        "Using blockchain for agriculture supply chain management",
      ],
      answer:
        "Earning interest or rewards by providing liquidity to DeFi protocols",
    },
    {
      question: "What is the purpose of a 'liquidity pool' in DeFi?",
      options: [
        "Storing digital assets in a secure wallet",
        "Ensuring price stability for a specific cryptocurrency",
        "Pooling funds for charitable donations",
        "Creating a decentralized governance system",
      ],
      answer: "Ensuring price stability for a specific cryptocurrency",
    },
    {
      question:
        "What is 'impermanent loss' in the context of liquidity provision in DeFi?",
      options: [
        "Loss of funds due to hacking or security breaches",
        "Loss of value in deposited assets due to price volatility",
        "Temporary loss of internet connection affecting transactions",
        "Loss of private keys and inability to access funds",
      ],
      answer: "Loss of value in deposited assets due to price volatility",
    },
    {
      question:
        "Which cryptocurrency is commonly used as collateral in lending platforms within the DeFi ecosystem?",
      options: ["Bitcoin", "Ethereum", "Tezos", "Ripple"],
      answer: "Ethereum",
    },
    {
      question:
        "What is the term used to describe the process of providing liquidity to automated market maker (AMM) platforms in DeFi?",
      options: ["Staking", "Mining", "Yield Farming", "Token Swapping"],
      answer: "Yield Farming",
    },
    {
      question:
        "What is the purpose of a decentralized oracle in the DeFi ecosystem?",
      options: [
        "To provide secure storage for digital assets",
        "To facilitate peer-to-peer lending",
        "To ensure price accuracy and fetch real-world data",
        "To create and execute smart contracts",
      ],
      answer: "To ensure price accuracy and fetch real-world data",
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

export default QuizApp9;
