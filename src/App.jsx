import "./App.css";
import Question from "./Questions.jsx";
import questions from "./disney-trivia-questions.jsx";

const categories = ["Mix", "Characters", "Movies", "Settings", "Songs"];

export default function App() {
  return (
    <div className="App">
      {questions && (
        <>
          <div className="category-nav">
              {categories.map((category) => (
                <div key={category} className="badge">
                  {category}
                </div>
              ))}
            </div>
          <div className="App-header">
            <div className="logo-container">
              <img
                src={
                  "https://cdn.freebiesupply.com/logos/large/2x/disney-1-logo-png-transparent.png"
                }
                className="logo"
                alt="logo"
              />
              <h1 className="fade-in">Trivia!</h1>
            </div>

            
          </div>

          <div className="content">
            <div className="cardsContainer">
              {questions.map((question) => (
                <Question
                key={question.category}
                category={question.category}
                question={question.question}
                title={question.title}
                answers={question.answers} // Pass the answers prop correctly
              />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
