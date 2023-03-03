import React, { useState } from "react";
import Project from "../../components/Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "pokemon-battle-simulator",
      description: "Pokemon Fusion Battle Game",
      link: "https://wangbrian26.github.io/Pokemon-Fusion-Battle-Simulator/",
      repo: "https://github.com/wangbrian26/Pokemon-Fusion-Battle-Simulator",
    },
    {
      name: "team-profile",
      description: "Team Profile Generator",
      link: "https://github.com/jthnguyen9909/team-profile-generator",
      repo: "https://github.com/jthnguyen9909/team-profile-generator",
    },
    {
      name: "jate",
      description: "Just Another Text Editor",
      link: "https://hidden-harbor-60815.herokuapp.com/",
      repo: "https://github.com/jthnguyen9909/text-editor-pwa",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
