import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";

const pages = ["About Me", "Portfolio", "Contact Me"];

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "rgb(26, 26, 26)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontSize: "2rem",
              mr: "60%",
              pl: "5px",
              display: { xs: "flex", md: "flex" },
              fontFamily: "Satisfy, cursive",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Johnathan Nguyen
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              className="anim-icon bounce"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <PersonIcon />
            </Button>
            <Button
              className="anim-icon bounce"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <WorkIcon />
            </Button>
            <Button
              className="anim-icon bounce"
              sx={{ my: 2, color: "white", display: "block" }}
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
