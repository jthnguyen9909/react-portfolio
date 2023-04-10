import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import CollectionsIcon from "@mui/icons-material/Collections";
import EmailIcon from "@mui/icons-material/Email";

export default function ResponsiveAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="app-bar"
        style={{ position: "fixed" }}
        sx={{ backgroundColor: "rgb(26, 26, 26)" }}
      >
        <Toolbar>
          <Typography
            className="header-name"
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: "2rem",
              ml: "5%",
              pl: "5px",
              fontFamily: "Satisfy, cursive",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Johnathan Nguyen
          </Typography>
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
            className="anim-icon bounce sm-hide"
            sx={{ my: 2, mr: "5%", color: "white", display: "row" }}
            href="mailto:jthnguyen9909.work@gmail.com"
          >
            <EmailIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
