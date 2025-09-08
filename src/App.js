import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import IllusionCard from "./components/IllusionCard";
import illusions from "./assets/illusions";
import QuizMode from "./components/QuizMode";
import CategoryFilter from "./components/CategoryFilter";
import DarkModeToggle from "./components/DarkModeToggle";
import "./App.css";

function App() {
  const [category, setCategory] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  const filteredIllusions = category === "All"
    ? illusions
    : illusions.filter((illusion) => illusion.category === category);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Container className="mt-4">
        <h1 className="text-center mb-4">🌀 Optical Illusion Explorer</h1>
        
        {/* Dark Mode Toggle */}
        <DarkModeToggle setDarkMode={setDarkMode} />

        {/* Category Filter */}
        <CategoryFilter setCategory={setCategory} />

        {/* Quiz Mode */}
        <QuizMode />

        <Row>
          {filteredIllusions.map((illusion) => (
            <Col md={4} key={illusion.id} className="mb-4">
              <IllusionCard illusion={illusion} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
