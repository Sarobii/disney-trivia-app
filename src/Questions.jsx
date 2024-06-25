import PropTypes from "prop-types";
import { useState, useMemo } from "react";

function Question({ question, answers, title, onAnswered, isAnswered }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (isCorrect) => {
    if (!isAnswered) {
      setSelectedAnswer(isCorrect);
      onAnswered(isCorrect);
    }
  };

  // Randomize the order of the answers
  const randomizedAnswers = useMemo(() => {
    return [...answers].sort(() => Math.random() - 0.5);
  }, [answers]);

  return (
    <div className="question-container">
      <h2>{question}</h2>
      <p>{title}</p>
      {!isAnswered ? (
        <div className="button-container">
          {randomizedAnswers.map((answer, index) => (
            <button
              key={index}
              className="button"
              onClick={() => handleAnswerClick(answer.isCorrect)}
            >
              {answer.text}
            </button>
          ))}
        </div>
      ) : (
        <div className="answer-feedback">
          {selectedAnswer ? (
            <p className="correct">Correct!</p>
          ) : (
            <p className="wrong">Incorrect</p>
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
  title: PropTypes.string.isRequired,
  onAnswered: PropTypes.func.isRequired,
  isAnswered: PropTypes.bool.isRequired,
};

export default Question;