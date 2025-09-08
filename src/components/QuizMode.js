import React, { useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import Confetti from "react-confetti";
import illusions from "../assets/illusions"; // Adjust the path as needed

function QuizMode() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const generateQuestion = () => {
    const question = illusions[Math.floor(Math.random() * illusions.length)];
    const options = [question.title];

    // Generate two other random titles (wrong options)
    while (options.length < 3) {
      const random = illusions[Math.floor(Math.random() * illusions.length)];
      if (!options.includes(random.title)) {
        options.push(random.title);
      }
    }

    // Shuffle the options
    options.sort(() => Math.random() - 0.5);

    setCurrentQuestion({ ...question, options });
    setShowQuiz(true);
    setIsCorrect(null);
  };

  const handleAnswer = (answer) => {
    setIsCorrect(answer === currentQuestion.title);
    setShowQuiz(false);
  };

  return (
    <div>
      <Button
        variant="success"
        onClick={generateQuestion}
        className="mb-4 d-block mx-auto"
      >
        Start Quiz
      </Button>

      <Modal show={showQuiz} onHide={() => setShowQuiz(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Guess the Illusion!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentQuestion && (
            <>
              <p>What illusion is shown in the image below?</p>
              <img
                src={currentQuestion.image}
                alt={currentQuestion.title}
                className="img-fluid mb-3"
                style={{ maxHeight: "300px", objectFit: "contain" }}
              />
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline-primary"
                  onClick={() => handleAnswer(option)}
                  className="d-block w-100 mt-2"
                >
                  {option}
                </Button>
              ))}
            </>
          )}
        </Modal.Body>
      </Modal>

      {isCorrect !== null && (
        <Alert variant={isCorrect ? "success" : "danger"} className="mt-4 text-center">
          {isCorrect ? (
            <>
              Correct! <Confetti width={window.innerWidth} height={window.innerHeight} />
            </>
          ) : (
            "Incorrect! Try Again."
          )}
        </Alert>
      )}
    </div>
  );
}

export default QuizMode;
