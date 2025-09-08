import React from "react";
import { Button } from "react-bootstrap";

function DarkModeToggle({ setDarkMode }) {
  return (
    <div className="mb-4 d-flex justify-content-center">
      <Button
        variant="dark"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        Toggle Dark Mode
      </Button>
    </div>
  );
}

export default DarkModeToggle;
