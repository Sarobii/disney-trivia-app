import { useState, useEffect } from "react";
import "./App.css";
import Question from "./Questions.jsx";
import questions from "./disney-trivia-questions.jsx";

const categories = ["Mix", "Characters", "Movies", "Settings", "Songs"];

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

  useEffect(() => {
    if (questions) {
      setShuffledQuestions(shuffleArray(questions));
    }
  }, []);

  const filteredQuestions = selectedCategory === "Mix"
    ? shuffledQuestions
    : shuffledQuestions.filter(q => q.category === selectedCategory);

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  const resetQuiz = () => {
    setShuffledQuestions(shuffleArray(questions));
    setCurrentQuestionIndex(0);
    setScore(0);
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
              setCurrentQuestionIndex(0);
              setScore(0);
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
          <Question
            key={currentQuestionIndex}
            {...currentQuestion}
            onAnswered={handleNextQuestion}
          />
        ) : (
          <div className="quiz-end">
            <h2>Quiz Completed!</h2>
            <p>Your score: {score} out of {filteredQuestions.length}</p>
            <button onClick={resetQuiz}>Start Over</button>
          </div>
        )}
        <div className="progress">
          Question {currentQuestionIndex + 1} of {filteredQuestions.length}
        </div>
      </div>
    </div>
  );
}