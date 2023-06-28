import React, { useState } from "react";
import "../styles/QuizApp.css";

const QuizApp2 = () => {
  const [questions] = useState([
    {
      question: "What is the maximum supply of Bitcoin (BTC)?",
      options: [
        "10 million",
        "100 million",
        "1 billion",
        "21 million",
      ],
      answer: "21 million",
    },
    {
      question: "Which consensus algorithm does Ethereum use?",
      options: [
        "Proof of Stake (PoS)",
        "Proof of Work (PoW)",
        "Delegated Proof of Stake (DPoS)",
        "Proof of Authority (PoA)",
      ],
      answer: "Proof of Stake (PoS)",
    },
    {
      question: "What is the purpose of a blockchain?",
      options: [
        "Decentralized finance (DeFi)",
        "Secure peer-to-peer transactions",
        "Artificial intelligence (AI)",
        "Social media networking",
      ],
      answer: "Secure peer-to-peer transactions",
    },
    {
      question: "What is a smart contract?",
      options: [
        "A legally binding document",
        "A digital agreement between parties",
        "A software program that self-executes predefined actions",
        "A cryptographic puzzle",
      ],
      answer: "A software program that self-executes predefined actions",
    },
    {
      question:
        "Which blockchain platform is known for its support of non-fungible tokens (NFTs)?",
      options: ["Tezos", "Ethereum", "Bitcoin", "Cardano"],
      answer: "Ethereum",
    },
    {
      question: "What is a decentralized application (DApp)?",
      options: [
        "A mobile app that uses blockchain technology",
        "An app that can be accessed by multiple devices simultaneously",
        "An app that runs on a centralized server",
        "An app that runs on a blockchain network",
      ],
      answer: "An app that runs on a blockchain network",
    },
    {
      question: "What is a block in a blockchain?",
      options: [
        "A group of transactions",
        "A cryptographic key pair",
        "A physical storage unit",
        "A programming language",
      ],
      answer: "A group of transactions",
    },
    {
      question:
        "What is the purpose of a public key in blockchain cryptography?",
      options: [
        "To encrypt data",
        "To verify digital signatures",
        "To generate a unique identifier for a user",
        "To generate a shared secret key",
      ],
      answer: "To verify digital signatures",
    },
    {
      question:
        "What is the term used to describe the process of confirming transactions and adding them to the blockchain?",
      options: ["Mining", "Hashing", "Signing", "Verifying"],
      answer: "Mining",
    },
    {
      question: "What is the maximum supply of Bitcoin (BTC)?",
      options: ["10 million", "100 million", "1 billion", "21 million"],
      answer: "21 million",
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

export default QuizApp2;
