import { useState, useEffect } from "react";
import "./App.css";
import Question from "./Questions.jsx";
import questions from "./disney-trivia-questions.jsx";

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

export default function App() {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Mix");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attemptedQuestions, setAttemptedQuestions] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  useEffect(() => {
    if (questions) {
      setShuffledQuestions(shuffleArray(questions).slice(0, QUIZ_LENGTH));
    }
  }, []);

  const filteredQuestions = selectedCategory === "Mix"
    ? shuffledQuestions
    : shuffledQuestions.filter(q => q.category === selectedCategory);

  const handleAnswer = (isCorrect) => {
    if (!(currentQuestionIndex in answeredQuestions)) {
      setAttemptedQuestions(prev => prev + 1);
      if (isCorrect) {
        setScore(prevScore => prevScore + 1);
      }
      setAnsweredQuestions(prev => ({ ...prev, [currentQuestionIndex]: isCorrect }));
    }
  };

  const moveQuestion = (direction) => {
    setCurrentQuestionIndex(prevIndex => {
      const newIndex = prevIndex + direction;
      return Math.max(0, Math.min(newIndex, filteredQuestions.length - 1));
    });
  };

  const resetQuiz = () => {
    setShuffledQuestions(shuffleArray(questions).slice(0, QUIZ_LENGTH));
    setCurrentQuestionIndex(0);
    setScore(0);
    setAttemptedQuestions(0);
    setAnsweredQuestions({});
  };

  if (!questions || questions.length === 0) {
    return <div>Failed to load questions</div>;
  }

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  return (
    <div className="App">
      <div className="category-nav">
        {categories.map((category) => (
          <div
            key={category}
            className={`badge ${category === selectedCategory ? 'selected' : ''}`}
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
        {currentQuestion ? (
          <>
            <Question
              key={currentQuestionIndex}
              {...currentQuestion}
              onAnswered={handleAnswer}
              isAnswered={currentQuestionIndex in answeredQuestions}
            />
            <div className="navigation">
              <button onClick={() => moveQuestion(-1)} disabled={currentQuestionIndex === 0}>Previous</button>
              <button onClick={() => moveQuestion(1)} disabled={currentQuestionIndex === filteredQuestions.length - 1}>Next</button>
            </div>
          </>
        ) : (
          <div className="quiz-end">
            <h2>Quiz Completed!</h2>
            <p>Your score: {score} out of {attemptedQuestions}</p>
            <button onClick={resetQuiz}>Start Over</button>
          </div>
        )}
        <div className="progress">
          Question {currentQuestionIndex + 1} of {filteredQuestions.length}
        </div>
        <div className="score">
          Score: {score}/{attemptedQuestions} correct
        </div>
      </div>
    </div>
  );
}