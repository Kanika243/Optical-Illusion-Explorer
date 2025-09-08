// src/components/ExplanationModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";

function ExplanationModal({ show, handleClose, illusion }) {
  if (!illusion) return null;

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{illusion.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={illusion.image}
          alt={illusion.title}
          className="img-fluid illusion-modal-img mb-3"
        />
        <p>{illusion.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ExplanationModal;
