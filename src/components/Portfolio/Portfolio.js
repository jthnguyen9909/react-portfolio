import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "pokemon-battle-simulator",
      title: "Pokemon Fusion Battle Simulator",
      description:
        "This is my first group project built using html, css, vanilla javascript, and some simple API integration to create a game application similar to the popular series Pokemon.",
      link: "https://wangbrian26.github.io/Pokemon-Fusion-Battle-Simulator/",
      repo: "https://github.com/wangbrian26/Pokemon-Fusion-Battle-Simulator",
    },
    {
      name: "team-profile",
      title: "Team Profile Generator",
      description:
        "A fairly barebones application built using test driven development for a user to easily generate a webpage that displays and formats information inputted about a team.",
      link: "https://github.com/jthnguyen9909/team-profile-generator",
      repo: "https://github.com/jthnguyen9909/team-profile-generator",
    },
    {
      name: "jate",
      title: "Just Another Text Editor",
      description:
        "Simple text editor application that is developed to run on any device and features data persistence.",
      link: "https://hidden-harbor-60815.herokuapp.com/",
      repo: "https://github.com/jthnguyen9909/text-editor-pwa",
    },
  ]);

  return (
    <div>
      <h3>Projects</h3>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
