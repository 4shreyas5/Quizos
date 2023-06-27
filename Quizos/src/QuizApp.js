import React, { useState } from 'react';
import './QuizApp.css';

const QuizApp = () => {
  const [questions] = useState([
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      answer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars'
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Ag', 'Au', 'Cu', 'Pt'],
      answer: 'Au'
    }
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setSelectedOption('');
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
          <p className="quiz-result">You answered {correctAnswers} out of {questions.length} questions correctly.</p>
        </div>
      );
    }

    return (
      <div className="quiz-container">
        <h2 className="quiz-title">Question {currentQuestion + 1}</h2>
        <p className="quiz-question">{questions[currentQuestion].question}</p>
        {renderOptions()}
        <button className="quiz-next-btn" onClick={handleNextQuestion} disabled={!selectedOption}>
          Next Question
        </button>
      </div>
    );
  };

  return <div className="app-container">{renderQuiz()}</div>;
};

export default QuizApp;
