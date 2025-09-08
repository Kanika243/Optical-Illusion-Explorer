import React, { useState } from "react";
import { Form } from "react-bootstrap";

function IllusionSlider() {
  const [blur, setBlur] = useState(0);
  const [contrast, setContrast] = useState(100);

  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>Blur</Form.Label>
        <Form.Range
          min={0}
          max={10}
          value={blur}
          onChange={(e) => setBlur(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contrast</Form.Label>
        <Form.Range
          min={50}
          max={200}
          value={contrast}
          onChange={(e) => setContrast(e.target.value)}
        />
      </Form.Group>

      <div
        className="illusion-preview"
        style={{
          filter: `blur(${blur}px) contrast(${contrast}%)`,
        }}
      >
        <p className="text-muted">Adjust filters to see changes.</p>
      </div>
    </div>
  );
}

export default IllusionSlider;
