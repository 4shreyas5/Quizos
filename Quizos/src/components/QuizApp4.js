import React, { useState } from "react";
import "../styles/QuizApp.css";

const QuizApp4 = () => {
  const [questions] = useState([
    {
      question: "What does NFT stand for?",
      options: [
        "Non-Fungible Token",
        "New File Transfer",
        "Network Functionality Test",
        "National Finance Treaty",
      ],
      answer: "Non-Fungible Token",
    },
    {
      question: "What is the main characteristic of an NFT?",
      options: [
        "Interchangeable with other tokens of the same type",
        "Divisible into smaller units",
        "Indivisible and unique",
        "Backed by physical assets",
      ],
      answer: "Indivisible and unique",
    },
    {
      question: "Which blockchain network is commonly used for creating and trading NFTs?",
      options: [
        "Ethereum",
        "Bitcoin",
        "Cardano",
        "Binance Smart Chain",
      ],
      answer: "Ethereum",
    },
    {
      question: "What type of digital assets can be represented as NFTs?",
      options: [
        "Images and artwork",
        "Cryptocurrency tokens",
        "Text documents",
        "Email communications",
      ],
      answer: "Images and artwork",
    },
    {
      question: "What is the purpose of token standards like ERC-721 and ERC-1155?",
      options: [
        "To define the rules for creating fungible tokens",
        "To enable the creation of stablecoins",
        "To establish a standard for creating non-fungible tokens",
        "To regulate the supply of tokens in an ecosystem",
      ],
      answer: "To establish a standard for creating non-fungible tokens",
    },
    {
      question: "What is the process of 'minting' an NFT?",
      options: [
        "Creating a digital copy of an existing NFT",
        "Converting a fungible token into an NFT",
        "Generating a new unique NFT",
        "Destroying an existing NFT",
      ],
      answer: "Generating a new unique NFT",
    },
    {
      question: "What is the role of a decentralized marketplace in the NFT ecosystem?",
      options: [
        "Facilitating the trading and exchange of NFTs",
        "Providing secure storage for NFTs",
        "Enforcing copyright laws for NFTs",
        "Validating the authenticity of NFTs",
      ],
      answer: "Facilitating the trading and exchange of NFTs",
    },
    {
      question: "What is the purpose of token metadata in an NFT?",
      options: [
        "To store additional information about the token",
        "To encrypt the token for security",
        "To determine the value of the token",
        "To facilitate token transfers across different blockchains",
      ],
      answer: "To store additional information about the token",
    },
    {
      question: "What is the concept of 'royalties' in the NFT space?",
      options: [
        "The fees paid to artists for creating NFTs",
        "The commission earned by NFT marketplaces",
        "The legal rights associated with owning an NFT",
        "The ability to resell an NFT at a higher price",
      ],
      answer: "The fees paid to artists for creating NFTs",
    },
    {
      question: "What are some common use cases for NFTs?",
      options: [
        "Digital art, collectibles, and gaming items",
        "Financial transactions and money transfers",
        "Website development and hosting",
        "Social media interactions and messaging",
      ],
      answer: "Digital art, collectibles, and gaming items",
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

export default QuizApp4;
