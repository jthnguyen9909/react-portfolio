import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import CollectionsIcon from "@mui/icons-material/Collections";
import EmailIcon from "@mui/icons-material/Email";

const pages = ["About Me", "Portfolio", "Contact Me"];

function ResponsiveAppBar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "rgb(26, 26, 26)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <Typography
              className="header-name"
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontSize: "2rem",
                mr: 50,
                pl: "5px",
                display: { xs: "flex", md: "flex" },
                fontFamily: "Satisfy, cursive",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                minWidth: "360px",
              }}
            >
              Johnathan Nguyen
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              className="anim-icon bounce"
              sx={{ my: 2, color: "white", display: "row" }}
              href="#top"
            >
              <HomeIcon />
            </Button>
            <Button
              className="anim-icon bounce"
              sx={{ my: 2, color: "white", display: "row" }}
              href="#about-section"
            >
              <PersonIcon />
            </Button>
            <Button
              className="anim-icon bounce"
              sx={{ my: 2, color: "white", display: "row" }}
              href="#prof-section"
            >
              <WorkIcon />
            </Button>
            <Button
              className="anim-icon bounce"
              sx={{ my: 2, color: "white", display: "row" }}
              href="#projects-section"
            >
              <CollectionsIcon />
            </Button>
            <Button
              className="anim-icon bounce"
              sx={{ my: 2, color: "white", display: "row" }}
              href="mailto:jthnguyen9909.work@gmail.com"
            >
              <EmailIcon />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
