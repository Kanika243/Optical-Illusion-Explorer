import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ExplanationModal from "./ExplanationModal";

function IllusionCard({ illusion }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Check if the illusion is Spinning Dancer and apply a custom class
  const isSpinningDancer = illusion.title === "Spinning Dancer";

  return (
    <div>
      <Card className="illusion-card shadow">
        <Card.Img 
          variant="top" 
          src={illusion.image} 
          className={isSpinningDancer ? "spinning-dancer" : ""} 
        />
        <Card.Body>
          <Card.Title>{illusion.title}</Card.Title>
          <Button variant="primary" onClick={handleShow}>
            See Explanation
          </Button>
        </Card.Body>
      </Card>

      <ExplanationModal
        show={showModal}
        handleClose={handleClose}
        illusion={illusion}
      />
    </div>
  );
}

export default IllusionCard;
