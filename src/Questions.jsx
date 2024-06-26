import PropTypes from "prop-types";
import { useState } from "react";

function Question({ question, answers, onAnswered, isAnswered, selectedAnswerIndex }) {
  const [localSelectedAnswerIndex, setLocalSelectedAnswerIndex] = useState(null);

  const handleAnswerClick = (isCorrect, index) => {
    if (!isAnswered) {
      setLocalSelectedAnswerIndex(index);
      onAnswered(isCorrect, index);
    }
  };

  const displayedAnswerIndex = isAnswered ? selectedAnswerIndex : localSelectedAnswerIndex;

  return (
    <div className="question-container">
      <h2>{question}</h2>
      <div className="button-container">
        {answers.map((answer, index) => (
          <button
            key={index}
            className={`button ${isAnswered && index === displayedAnswerIndex ? (answer.isCorrect ? 'correct' : 'wrong') : ''}`}
            onClick={() => handleAnswerClick(answer.isCorrect, index)}
            disabled={isAnswered}
          >
            {answer.text}
          </button>
        ))}
      </div>
      {isAnswered && (
        <div className="answer-feedback">
          {answers[displayedAnswerIndex].isCorrect ? (
            <p className="correct">Correct!</p>
          ) : (
            <p className="wrong">
              Incorrect. &#128542;</p>
          )}
        </div>
      )}
    </div>
  );
}

Question.propTypes = {
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      isCorrect: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onAnswered: PropTypes.func.isRequired,
  isAnswered: PropTypes.bool.isRequired,
  selectedAnswerIndex: PropTypes.number,
};

export default Question;