import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

function CategoryFilter({ setCategory }) {
  return (
    <ButtonGroup className="mb-4 d-flex justify-content-center">
      <Button variant="secondary" onClick={() => setCategory("All")}>
        All
      </Button>
      <Button variant="secondary" onClick={() => setCategory("Brightness")}>
        Brightness
      </Button>
      <Button variant="secondary" onClick={() => setCategory("Motion")}>
        Motion
      </Button>
      <Button variant="secondary" onClick={() => setCategory("Size")}>
        Size
      </Button>
    </ButtonGroup>
  );
}

export default CategoryFilter;
