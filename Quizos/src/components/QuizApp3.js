import React, { useState } from "react";
import "../styles/QuizApp.css";

const QuizApp3 = () => {
  const [questions] = useState([
    {
      question: "What does Web3 refer to?",
      options: [
        "The third version of the World Wide Web",
        "The latest JavaScript framework",
        "A set of protocols and standards for decentralized applications",
        "A programming language for web development",
      ],
      answer: "A set of protocols and standards for decentralized applications",
    },
    {
      question: "What is the purpose of a Web3 provider?",
      options: [
        "To manage private keys for blockchain transactions",
        "To facilitate communication with the Ethereum network",
        "To generate random numbers for smart contracts",
        "To store and retrieve data from IPFS",
      ],
      answer: "To facilitate communication with the Ethereum network",
    },
    {
      question: "What is a smart contract in the context of Web3?",
      options: [
        "An agreement between two parties stored on a blockchain",
        "A contract written in JavaScript for web development",
        "A contract that can be accessed on the World Wide Web",
        "A contract that automatically executes predefined actions based on specified conditions",
      ],
      answer: "A contract that automatically executes predefined actions based on specified conditions",
    },
    {
      question: "Which programming language is commonly used for writing smart contracts on the Ethereum blockchain?",
      options: [
        "Solidity",
        "JavaScript",
        "Python",
        "C++",
      ],
      answer: "Solidity",
    },
    {
      question: "What is the main advantage of decentralized applications (DApps) built on Web3?",
      options: [
        "Enhanced security and censorship resistance",
        "Faster performance compared to traditional web applications",
        "Easier integration with centralized systems",
        "Access to a wider range of web browsers",
      ],
      answer: "Enhanced security and censorship resistance",
    },
    {
      question: "What does IPFS stand for?",
      options: [
        "Internet Protocol File Sharing",
        "Interplanetary File System",
        "International Peer-to-Peer File System",
        "Innovative Protocol for File Storage",
      ],
      answer: "Interplanetary File System",
    },
    {
      question: "What is the purpose of the MetaMask browser extension?",
      options: [
        "To manage cryptocurrency wallets",
        "To browse the web securely",
        "To analyze website performance",
        "To create virtual private networks",
      ],
      answer: "To manage cryptocurrency wallets",
    },
    {
      question: "What does ENS stand for in the context of Ethereum?",
      options: [
        "Ethereum Naming Service",
        "Ethereum Network Security",
        "Ethereum Node Synchronization",
        "Ethereum Native Smart-contracts",
      ],
      answer: "Ethereum Naming Service",
    },
    {
      question: "What is the purpose of the ERC-20 token standard?",
      options: [
        "To define the rules for creating non-fungible tokens (NFTs)",
        "To enable interoperability between different blockchain networks",
        "To establish a standard for creating fungible tokens on the Ethereum network",
        "To regulate the supply of Ether (ETH) in the Ethereum ecosystem",
      ],
      answer: "To establish a standard for creating fungible tokens on the Ethereum network",
    },
    {
      question: "What is the role of a Web3.js library in web development?",
      options: [
        "To interact with blockchain networks and smart contracts",
        "To optimize website performance",
        "To generate responsive web designs",
        "To secure web applications against cyber attacks",
      ],
      answer: "To interact with blockchain networks and smart contracts",
    }
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

export default QuizApp3;
