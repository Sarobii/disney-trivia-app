import { useState, useEffect } from "react";
import "./App.css";
import Question from "./Questions.jsx";
import questions from "./disney-trivia-questions.jsx";
import Confetti from 'react-confetti';

const categories = ["Mix", "Characters", "Movies", "Settings", "Songs"];
const QUIZ_LENGTH = 10;

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function shuffleQuestions(questions) {
  return questions.map((question) => ({
    ...question,
    answers: shuffleArray(question.answers),
  }));
}

export default function App() {
  const [categoryQuestions, setCategoryQuestions] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("Mix");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attemptedQuestions, setAttemptedQuestions] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  

  useEffect(() => {
    generateQuestions();
  }, []);

  const generateQuestions = () => {
    const shuffledQuestions = shuffleQuestions(shuffleArray(questions));
    const categoryQuestionsObj = categories.reduce((acc, category) => {
      if (category === "Mix") {
        acc[category] = shuffledQuestions.slice(0, QUIZ_LENGTH);
      } else {
        const filteredQuestions = shuffledQuestions.filter(q => q.category === category);
        acc[category] = filteredQuestions.slice(0, QUIZ_LENGTH);
      }
      return acc;
    }, {});
    setCategoryQuestions(categoryQuestionsObj);
  };

  const handleAnswer = (isCorrect, selectedAnswerIndex) => {
    if (!(currentQuestionIndex in answeredQuestions)) {
      setAttemptedQuestions((prev) => prev + 1);
      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }
      setAnsweredQuestions((prev) => ({
        ...prev,
        [currentQuestionIndex]: { isCorrect, selectedAnswerIndex },
      }));

      if (Object.keys(answeredQuestions).length + 1 === QUIZ_LENGTH) {
        setQuizCompleted(true);
      }
    }
  };

  const moveQuestion = (direction) => {
    setCurrentQuestionIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      return Math.max(0, Math.min(newIndex, QUIZ_LENGTH - 1));
    });
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAttemptedQuestions(0);
    setAnsweredQuestions({});
    setQuizCompleted(false);
    generateQuestions();
  };

  const currentQuestion = categoryQuestions[selectedCategory]?.[currentQuestionIndex];
  const currentAnswer = answeredQuestions[currentQuestionIndex];

  return (
    <div className="App">
      <div className="category-nav">
        {categories.map((category) => (
          <div
            key={category}
            className={`badge ${
              category === selectedCategory ? "selected" : ""
            }`}
            onClick={() => {
              setSelectedCategory(category);
              resetQuiz();
            }}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="App-header">
        <div className="logo-container">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/disney-1-logo-png-transparent.png"
            className="logo"
            alt="logo"
          />
          <h1 className="fade-in">Trivia!</h1>
        </div>
      </div>

      <div className="content">
        {quizCompleted ? (
          <div className="quiz-end">
            <h2>Quiz Completed!</h2>
            <Confetti />
            <p className="final-score">
              Your final score: {score} out of {QUIZ_LENGTH}
            </p>
            <button onClick={resetQuiz}>Start New Quiz</button>
          </div>
        ) : currentQuestion ? (
          <>
            <div className="question-header">
              <div className="score-info">Score: {score}</div>
              <h2>{currentQuestion.question}</h2>
              <div className="attempted-info">Attempted: {attemptedQuestions}</div>
            </div>
            <Question
              key={currentQuestionIndex}
              {...currentQuestion}
              onAnswered={handleAnswer}
              isAnswered={currentAnswer !== undefined}
              selectedAnswerIndex={currentAnswer?.selectedAnswerIndex}
            />
            <div className="navigation">
              <button
                onClick={() => moveQuestion(-1)}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              <button
                onClick={() => moveQuestion(1)}
                disabled={currentQuestionIndex === QUIZ_LENGTH - 1}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div>Loading questions...</div>
        )}
        <div className="progress">
          Question {currentQuestionIndex + 1} of {QUIZ_LENGTH}
        </div>
      </div>
    </div>
  );
}