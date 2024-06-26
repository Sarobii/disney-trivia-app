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
  // State variables to keep track of quiz state
  const [categoryQuestions, setCategoryQuestions] = useState({}); // Questions for the current category
  const [selectedCategory, setSelectedCategory] = useState("Mix"); // Currently selected category
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Index of the current question
  const [score, setScore] = useState(0); // Current score
  const [attemptedQuestions, setAttemptedQuestions] = useState(0); // Number of questions attempted
  const [answeredQuestions, setAnsweredQuestions] = useState({}); // Previously answered questions
  const [quizCompleted, setQuizCompleted] = useState(false); // Quiz completion status
  

  // Generate questions for the current category when the component mounts
  useEffect(() => {
    generateQuestions();
  }, []);

  // Generate questions for the current category
  const generateQuestions = () => {
    const shuffledQuestions = shuffleQuestions(shuffleArray(questions)); // Shuffle questions
    const categoryQuestionsObj = categories.reduce((acc, category) => {
      if (category === "Mix") {
        acc[category] = shuffledQuestions.slice(0, QUIZ_LENGTH); // Get QUIZ_LENGTH questions for mix category
      } else {
        const filteredQuestions = shuffledQuestions.filter(q => q.category === category); // Filter questions by category
        acc[category] = filteredQuestions.slice(0, QUIZ_LENGTH); // Get QUIZ_LENGTH questions for other categories
      }
      return acc;
    }, {});
    setCategoryQuestions(categoryQuestionsObj); // Set category questions state
  };

  // Handle answer selection
  const handleAnswer = (isCorrect, selectedAnswerIndex) => {
    if (!(currentQuestionIndex in answeredQuestions)) { // If question not already answered
      setAttemptedQuestions((prev) => prev + 1); // Increment attempted questions count
      if (isCorrect) { // If answer is correct
        setScore((prevScore) => prevScore + 1); // Increment score
      }
      setAnsweredQuestions((prev) => ({ // Update answered questions state
        ...prev,
        [currentQuestionIndex]: { isCorrect, selectedAnswerIndex },
      }));

      if (Object.keys(answeredQuestions).length + 1 === QUIZ_LENGTH) { // If all questions answered
        setQuizCompleted(true); // Set quiz completion status
      }
    }
  };

  // Move to previous or next question
  const moveQuestion = (direction) => {
    setCurrentQuestionIndex((prevIndex) => {
      const newIndex = prevIndex + direction; // Calculate new question index
      return Math.max(0, Math.min(newIndex, QUIZ_LENGTH - 1)); // Keep index within range
    });
  };

  // Reset quiz to start state
  const resetQuiz = () => {
    setCurrentQuestionIndex(0); // Reset current question index
    setScore(0); // Reset score
    setAttemptedQuestions(0); // Reset attempted questions count
    setAnsweredQuestions({}); // Reset answered questions state
    setQuizCompleted(false); // Reset quiz completion status
    generateQuestions(); // Generate new questions
  };

  // Get current question and answer
  const currentQuestion = categoryQuestions[selectedCategory]?.[currentQuestionIndex];
  const currentAnswer = answeredQuestions[currentQuestionIndex];

  // Render the quiz component
  return (
    <div className="App">
      {/* Category navigation */}
      <div className="category-nav">
        {categories.map((category) => (
          <div
            key={category}
            className={`badge ${
              category === selectedCategory ? "selected" : ""
            }`}
            onClick={() => {
              setSelectedCategory(category); // Set selected category when clicked
              resetQuiz(); // Reset quiz to start state
            }}
          >
            {category}
          </div>
        ))}
      </div>
      {/* Quiz header */}
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

      {/* Quiz content */}
      <div className="content">
        {/* Quiz completion status */}
        {quizCompleted ? (
          <div className="quiz-end">
            <h2>Quiz Completed!</h2>
            <Confetti /> {/* Confetti animation */}
            <p className="final-score">
              Your final score: {score} out of {QUIZ_LENGTH}
            </p>
            <button onClick={resetQuiz}>Start New Quiz</button> {/* Button to start new quiz */}
          </div>
        ) : currentQuestion ? (
          <>
            {/* Current question */}
            <div className="question-header">
              <div className="score-info">Score: {score}</div> {/* Current score */}
              <h2>{currentQuestion.question}</h2> {/* Current question */}
              <div className="attempted-info">Attempted: {attemptedQuestions}</div> {/* Number of questions attempted */}
            </div>
            {/* Current question and answer */}
            <Question
              key={currentQuestionIndex}
              {...currentQuestion}
              onAnswered={handleAnswer}
              isAnswered={currentAnswer !== undefined}
              selectedAnswerIndex={currentAnswer?.selectedAnswerIndex}
            />
            {/* Navigation buttons */}
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
        {/* Progress indicator */}
        <div className="progress">
          Question {currentQuestionIndex + 1} of {QUIZ_LENGTH}
        </div>
      </div>
    </div>
  );
}
