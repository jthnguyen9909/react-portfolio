import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    neutral: {
      main: "rgb(26, 26, 26)",
      contrastText: "#fff",
    },
  },
});

function Resume() {
  return (
    <div className="resume-container">
      <h4 className="slide1">Hello there!</h4>
      <h5 className="slide2">I'm</h5>
      <h3 className="slide2">Johnathan Nguyen</h3>
      <h4 className="slide3">Fullstack Developer</h4>
      <section className="mb-4">
        <a
          className="btn btn-primary btn-floating m-1 anim-icon bounce"
          style={{ backgroundColor: "#55acee" }}
          href="https://twitter.com/jthnguyen9909"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>

        <a
          className="btn btn-primary btn-floating m-1 anim-icon bounce"
          S
          style={{ backgroundColor: "#dd4b39" }}
          href="mailto:jthnguyen9909.work@gmail.com"
          role="button"
        >
          <FontAwesomeIcon icon={["fab", "google"]} />
        </a>
        <a
          className="btn btn-primary btn-floating m-1 anim-icon bounce"
          style={{ backgroundColor: "#0082ca" }}
          href="https://www.linkedin.com/in/jthnguyen9909/"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </a>
        <a
          className="btn btn-primary btn-floating m-1 anim-icon bounce"
          style={{ backgroundColor: "#333333" }}
          href="https://github.com/jthnguyen9909"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </section>
      <ThemeProvider theme={theme}>
        <ButtonGroup>
          <Button
            sx={{ border: 1 }}
            className="resume-btn"
            color="neutral"
            variant="contained"
          >
            DOWNLOAD MY RESUME
          </Button>
          <Button
            sx={{ border: 1 }}
            className="resume-btn"
            color="neutral"
            variant="contained"
          >
            CONTACT ME
          </Button>
        </ButtonGroup>
      </ThemeProvider>
    </div>
  );
}

export default Resume;
