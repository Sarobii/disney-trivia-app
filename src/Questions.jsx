import PropTypes from "prop-types";
import React from "react";

function Question({ question, answers, title }) {
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [totalQuestions, setTotalQuestions] = React.useState(0);
  const [score, setScore] = React.useState(0);

  const handleAnswerClick = (isCorrect) => {
    setSelectedAnswer(isCorrect);
    setTotalQuestions((prevTotalQuestions) => prevTotalQuestions + 1);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    // Wait for 1 second before showing the next question
    setTimeout(() => {
      setSelectedAnswer(null);
    }, 1000);
  };

  // Randomize the order of the correct answers
  const randomizedAnswers = React.useMemo(() => {
    const shuffledAnswers = [...answers];
    for (let i = shuffledAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledAnswers[i], shuffledAnswers[j]] = [
        shuffledAnswers[j],
        shuffledAnswers[i],
      ];
    }
    return shuffledAnswers;
  }, [answers]);

  return (
    <div>
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
          >
            {answer.text}
          </button>
        ))}
      </div>
      <p>
        Total Questions: {totalQuestions} / {answers.length}
      </p>
      <p>Correct Answers: {score}</p>
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
};

export default Question;
