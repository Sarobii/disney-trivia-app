import PropTypes from "prop-types";
import { useState, useMemo } from "react";

function Question({ question, answers, title, onAnswered }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (isCorrect) => {
    setSelectedAnswer(isCorrect);

    // Wait for 1 second before showing the next question
    setTimeout(() => {
      onAnswered(isCorrect);
      setSelectedAnswer(null);
    }, 1000);
  };

  // Randomize the order of the answers
  const randomizedAnswers = useMemo(() => {
    return [...answers].sort(() => Math.random() - 0.5);
  }, [answers]);

  return (
    <div className="question-container">
      <h2>{question}</h2>
      <p>{title}</p>
      <div className="button-container">
        {randomizedAnswers.map((answer, index) => (
          <button
            key={index}
            className={`button ${
              selectedAnswer === null
                ? ""
                : selectedAnswer === answer.isCorrect
                ? "correct"
                : "wrong"
            }`}
            onClick={() => handleAnswerClick(answer.isCorrect)}
            disabled={selectedAnswer !== null}
          >
            {answer.text}
          </button>
        ))}
      </div>
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
};

export default Question;