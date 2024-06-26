import PropTypes from "prop-types";
import { useState } from "react";

/*
 * Renders a question with multiple answer options and handles the user's selection.
 */
function Question({ answers, onAnswered, isAnswered, selectedAnswerIndex }) {
  // State variable to keep track of the selected answer index locally
  const [localSelectedAnswerIndex, setLocalSelectedAnswerIndex] = useState(null);

  /**
   * Handles the click event on an answer button.
   * If the question has not been answered yet, it updates the local selected answer index and calls the onAnswered callback.
   *
   * @param {boolean} isCorrect - Indicates if the answer is correct.
   * @param {number} index - The index of the clicked answer.
   */
  const handleAnswerClick = (isCorrect, index) => {
    if (!isAnswered) {
      setLocalSelectedAnswerIndex(index);
      onAnswered(isCorrect, index);
    }
  };

  // Determine the answer index to be displayed based on whether the question has been answered or not
  const displayedAnswerIndex = isAnswered ? selectedAnswerIndex : localSelectedAnswerIndex;

  return (
    <div className="question-container">
      <div className="button-container">
        {/* Render answer buttons */}
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
      {/* Render feedback for the selected answer */}
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