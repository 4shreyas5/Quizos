import React, { useState } from "react";
import "../styles/QuizApp.css";

const QuizApp = () => {
  const [questions] = useState([
    {
      question: "What is the native cryptocurrency of the Tezos blockchain?",
      options: ["Bitcoin", "Ethereum", "Tez", "Cardano"],
      answer: "Tez",
    },
    {
      question: "Which consensus algorithm does Tezos use?",
      options: [
        "Proof of Stake (PoS)",
        "Proof of Work (PoW)",
        "Delegated Proof of Stake (DPoS)",
        "Proof of Authority (PoA)",
      ],
      answer: "Proof of Stake (PoS)",
    },
    {
      question: "What is the primary purpose of the Tezos blockchain?",
      options: [
        "Decentralized finance (DeFi)",
        "Smart contracts",
        "Identity verification",
        "Supply chain management",
      ],
      answer: "Smart contracts",
    },
    {
      question: "Who is the founder of Tezos?",
      options: [
        "Vitalik Buterin",
        "Satoshi Nakamoto",
        "Charles Hoskinson",
        "Arthur Breitman",
      ],
      answer: "Arthur Breitman",
    },
    {
      question:
        "Which programming language is primarily used for writing smart contracts on Tezos?",
      options: ["Solidity", "JavaScript", "Michelson", "Rust"],
      answer: "Michelson",
    },
    {
      question: 'What is the concept of "self-amendment" in Tezos?',
      options: [
        "The ability to automatically upgrade the blockchain protocol",
        "The ability to reverse transactions",
        "The ability to print new coins",
        "The ability to fork the blockchain",
      ],
      answer: "The ability to automatically upgrade the blockchain protocol",
    },
    {
      question: "What is the total supply of Tezos (XTZ) tokens?",
      options: ["10 million", "100 million", "1 billion", "10 billion"],
      answer: "1 billion",
    },
    {
      question: "Which smart contract standard is used on Tezos?",
      options: ["ERC-20", "NEP-5", "TZIP-12", "BEP-20"],
      answer: "TZIP-12",
    },
    {
      question:
        "What is the name of the on-chain governance mechanism in Tezos?",
      options: ["DAO", "DPOS", "Liquid Democracy", "On-chain Governance"],
      answer: "On-chain Governance",
    },
    {
      question: "Which year was the Tezos blockchain launched?",
      options: ["2016", "2017", "2018", "2019"],
      answer: "2018",
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

export default QuizApp;
