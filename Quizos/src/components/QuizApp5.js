import React, { useState } from "react";
import "../styles/QuizApp.css";

const QuizApp5 = () => {
  const [questions] = useState([
    {
      question: "What is a smart contract?",
      options: [
        "A legally binding agreement between two parties",
        "A self-executing program that runs on a blockchain",
        "A document written in plain language",
        "A centralized database for storing transaction records"
      ],
      answer: "A self-executing program that runs on a blockchain"
    },
    {
      question: "Which blockchain platform is known for popularizing smart contracts?",
      options: [
        "Ethereum",
        "Bitcoin",
        "Tezos",
        "Cardano"
      ],
      answer: "Ethereum"
    },
    {
      question: "What programming language is commonly used for writing smart contracts on Ethereum?",
      options: [
        "Solidity",
        "JavaScript",
        "Python",
        "C++"
      ],
      answer: "Solidity"
    },
    {
      question: "What is the purpose of a function modifier in a smart contract?",
      options: [
        "To modify the value of a variable",
        "To restrict access to a function",
        "To define a new data type",
        "To calculate the gas cost of a transaction"
      ],
      answer: "To restrict access to a function"
    },
    {
      question: "What is the gas fee in the context of smart contracts?",
      options: [
        "The fee paid to miners for validating the smart contract",
        "The fee paid to the blockchain network for storing the smart contract",
        "The fee paid to the smart contract developer for deploying the contract",
        "The fee paid to the government for using smart contracts"
      ],
      answer: "The fee paid to miners for validating the smart contract"
    },
    {
      question: "What is the role of a fallback function in a smart contract?",
      options: [
        "To handle transactions that don't match any specific function",
        "To revert the entire transaction in case of an error",
        "To send Ether to another smart contract",
        "To update the contract's state variables"
      ],
      answer: "To handle transactions that don't match any specific function"
    },
    {
      question: "What is the difference between a view function and a pure function in a smart contract?",
      options: [
        "View functions can modify the contract's state, while pure functions cannot",
        "Pure functions can modify the contract's state, while view functions cannot",
        "View functions don't consume gas, while pure functions do",
        "Pure functions are used for reading data from an external API"
      ],
      answer: "View functions don't consume gas, while pure functions do"
    },
    {
      question: "What is the purpose of an event in a smart contract?",
      options: [
        "To transfer Ether between accounts",
        "To trigger a specific action in the contract",
        "To emit logs for external systems to listen to",
        "To deploy the smart contract on the blockchain"
      ],
      answer: "To emit logs for external systems to listen to"
    },
    {
      question: "What is the difference between a public and external function in a smart contract?",
      options: [
        "Public functions can be called internally, while external functions cannot",
        "External functions can be called internally, while public functions cannot",
        "Public functions can be called by any account, while external functions require a specific permission",
        "External functions can modify the contract's state, while public functions cannot"
      ],
      answer: "Public functions can be called by any account, while external functions require a specific permission"
    },
    {
      question: "What is the purpose of the selfdestruct() function in a smart contract?",
      options: [
        "To destroy the contract and remove it from the blockchain",
        "To send Ether to a specific address",
        "To transfer ownership of the contract to another account",
        "To stop the execution of the contract"
      ],
      answer: "To destroy the contract and remove it from the blockchain"
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

export default QuizApp5;
