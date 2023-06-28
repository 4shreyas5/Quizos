import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/quizSelection.css'; // Import the CSS file for styling

const QuizSelection = () => {
  const quizzes = [
    { id: 1, name: 'Tezos Basics', description: '' },
    { id: 2, name: 'Blockchain Basics', description: '' },
    { id: 3, name: 'Web3', description: '' },
    { id: 4, name: 'NFTs', description: '' },
    { id: 5, name: 'Smart Contract', description: '' },
    { id: 6, name: 'Cryptocurrency', description: '' },
    { id: 7, name: 'Cryptocurrency Wallet', description: '' },
    { id: 8, name: 'Dapps', description: '' },
    { id: 9, name: 'DeFi', description: '' },
    { id: 10, name: 'Consensus Mechanism', description: '' }
  ];

  return (
    <div className="quiz-selection-container">
      {quizzes.map((quiz) => (
        <Link to={`/quizapp${quiz.id}`} key={quiz.id} className="quiz-card">
          <div className="card-content">
            <h2>{quiz.name}</h2>
            <p>{quiz.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default QuizSelection;
