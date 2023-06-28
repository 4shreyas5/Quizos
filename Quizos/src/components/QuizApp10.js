import React, { useState } from "react";
import "../styles/QuizApp.css";

const QuizApp10 = () => {
  const [questions] = useState([
    {
      question: "Which consensus mechanism is used by the Bitcoin blockchain?",
      options: [
        "Proof of Stake (PoS)",
        "Proof of Work (PoW)",
        "Delegated Proof of Stake (DPoS)",
        "Proof of Authority (PoA)"
      ],
      answer: "Proof of Work (PoW)"
    },
    {
      question: "What is the consensus mechanism used by the Ethereum 2.0 upgrade?",
      options: [
        "Proof of Stake (PoS)",
        "Proof of Work (PoW)",
        "Delegated Proof of Stake (DPoS)",
        "Proof of Authority (PoA)"
      ],
      answer: "Proof of Stake (PoS)"
    },
    {
      question: "Which consensus mechanism is used by the Cardano blockchain?",
      options: [
        "Proof of Stake (PoS)",
        "Proof of Work (PoW)",
        "Delegated Proof of Stake (DPoS)",
        "Proof of Authority (PoA)"
      ],
      answer: "Proof of Stake (PoS)"
    },
    {
      question: "What is the consensus mechanism used by the Ripple blockchain?",
      options: [
        "Proof of Stake (PoS)",
        "Proof of Work (PoW)",
        "Delegated Proof of Stake (DPoS)",
        "Proof of Authority (PoA)"
      ],
      answer: "Delegated Proof of Stake (DPoS)"
    },
    {
      question: "Which consensus mechanism is used by the EOS blockchain?",
      options: [
        "Proof of Stake (PoS)",
        "Proof of Work (PoW)",
        "Delegated Proof of Stake (DPoS)",
        "Proof of Authority (PoA)"
      ],
      answer: "Delegated Proof of Stake (DPoS)"
    },
    {
      question: "What consensus mechanism does the Algorand blockchain use?",
      options: [
        "Proof of Stake (PoS)",
        "Proof of Work (PoW)",
        "Delegated Proof of Stake (DPoS)",
        "Pure Proof of Stake (PPoS)"
      ],
      answer: "Pure Proof of Stake (PPoS)"
    },
    {
      question: "Which consensus mechanism is employed by the Cosmos blockchain?",
      options: [
        "Proof of Stake (PoS)",
        "Proof of Work (PoW)",
        "Delegated Proof of Stake (DPoS)",
        "Tendermint Consensus"
      ],
      answer: "Tendermint Consensus"
    },
    {
      question: "What consensus mechanism does the IOTA Tangle utilize?",
      options: [
        "Proof of Stake (PoS)",
        "Proof of Work (PoW)",
        "Delegated Proof of Stake (DPoS)",
        "Directed Acyclic Graph (DAG)"
      ],
      answer: "Directed Acyclic Graph (DAG)"
    },
    {
      question: "Which consensus mechanism is used by the NEO blockchain?",
      options: [
        "Proof of Stake (PoS)",
        "Proof of Work (PoW)",
        "Delegated Byzantine Fault Tolerance (dBFT)",
        "Proof of Authority (PoA)"
      ],
      answer: "Delegated Byzantine Fault Tolerance (dBFT)"
    },
    {
      question: "What consensus mechanism does the Lisk blockchain employ?",
      options: [
        "Proof of Stake (PoS)",
        "Proof of Work (PoW)",
        "Delegated Proof of Stake (DPoS)",
        "Delegated Proof of Contribution (DPoC)"
      ],
      answer: "Delegated Proof of Stake (DPoS)"
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

export default QuizApp10;
