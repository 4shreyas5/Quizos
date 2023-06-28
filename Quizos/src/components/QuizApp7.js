import React, { useState } from "react";
import "../styles/QuizApp.css";

const QuizApp7 = () => {
  const [questions] = useState([
    {
      question: "What is the main purpose of a cryptocurrency wallet?",
      options: [
        "To store private keys",
        "To mine cryptocurrencies",
        "To exchange cryptocurrencies",
        "To create new cryptocurrencies",
      ],
      answer: "To store private keys",
    },
    {
      question: "Which type of cryptocurrency wallet is not connected to the internet?",
      options: ["Hardware wallet", "Mobile wallet", "Web wallet", "Desktop wallet"],
      answer: "Hardware wallet",
    },
    {
      question: "Which of the following is a hardware wallet for storing cryptocurrencies?",
      options: ["Trezor", "Coinbase", "MetaMask", "Exodus"],
      answer: "Trezor",
    },
    {
      question: "What is a mnemonic phrase (recovery phrase) in a cryptocurrency wallet?",
      options: [
        "A string of words used to back up and restore a wallet",
        "The public address of a wallet",
        "The private key of a wallet",
        "The password to access a wallet",
      ],
      answer: "A string of words used to back up and restore a wallet",
    },
    {
      question: "Which of the following is an example of a software wallet?",
      options: ["Electrum", "Ledger Nano S", "Trezor", "KeepKey"],
      answer: "Electrum",
    },
    {
      question: "Which type of wallet is known for its convenience and accessibility?",
      options: ["Mobile wallet", "Hardware wallet", "Paper wallet", "Brain wallet"],
      answer: "Mobile wallet",
    },
    {
      question: "What is the purpose of a public address in a cryptocurrency wallet?",
      options: [
        "To receive funds",
        "To send funds",
        "To encrypt the wallet",
        "To back up the wallet",
      ],
      answer: "To receive funds",
    },
    {
      question: "Which of the following is a popular mobile wallet for cryptocurrencies?",
      options: ["Trust Wallet", "Ledger Nano X", "MyEtherWallet", "Atomic Wallet"],
      answer: "Trust Wallet",
    },
    {
      question: "What is the advantage of using a hardware wallet?",
      options: [
        "Enhanced security",
        "Faster transaction speeds",
        "Greater anonymity",
        "Lower fees",
      ],
      answer: "Enhanced security",
    },
    {
      question: "Which wallet type is considered the most secure?",
      options: ["Hardware wallet", "Web wallet", "Desktop wallet", "Paper wallet"],
      answer: "Hardware wallet",
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

export default QuizApp7;
