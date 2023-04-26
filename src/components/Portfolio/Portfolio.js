import React, { useState } from "react";
import Project from "../Project";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "communitea",
      title: "CommuniTEA",
      description:
        "Social Media App for boba enthusiasts to search and review boba stores. Features user accounts and favorite functionality. Built using React, MongoDB and Yelp API.",
      link: "https://ancient-hollows-48293.herokuapp.com/",
      repo: "https://github.com/jthnguyen9909/communitea",
    },
    {
      name: "vacayte",
      title: "Vacayte Travel App",
      description:
        "Travel Planning Application for users to plan their vacation itinerary with activities, events, and businesses utilizing the Yelp Fusion API.",
      link: "https://obscure-fjord-08413.herokuapp.com/",
      repo: "https://github.com/monysary/vacayte-travel-app",
    },
    {
      name: "pokemon-battle-simulator",
      title: "Pokemon Fusion Battle Simulator",
      description:
        "This is my first group project built using html, css, vanilla javascript, and some simple API integration to create a game application similar to the popular series Pokemon.",
      link: "https://wangbrian26.github.io/Pokemon-Fusion-Battle-Simulator/",
      repo: "https://github.com/wangbrian26/Pokemon-Fusion-Battle-Simulator",
    },
    {
      name: "social-network",
      title: "Social Network Backend API",
      description:
        "This is an API for the backend of a social network application for users to share thoughts, react, and add friends. Built using Express.js for routing and a MongoDB database.",
      link: "https://github.com/jthnguyen9909/social-network-api",
      repo: "https://github.com/jthnguyen9909/social-network-api",
    },
    {
      name: "team-profile",
      title: "Team Profile Generator",
      description:
        "A barebones application built using test driven development for a user to easily generate a webpage that displays and formats information inputted about a team.",
      link: "https://github.com/jthnguyen9909/team-profile-generator",
      repo: "https://github.com/jthnguyen9909/team-profile-generator",
    },
    {
      name: "google-books",
      title: "Google Books Search Engine",
      description:
        "Search engine application using the Google Books API with user authentication and encryption. Built using React, MongoDB, Express.js, and Google Books API.",
      link: "https://agile-atoll-57616.herokuapp.com/",
      repo: "https://github.com/jthnguyen9909/book-search-engine",
    },
  ]);

  return (
    <div>
      <h2 id="projects-section" className="projects-h2 scroll-section">
        Projects
      </h2>
      <div className="flex-row" sx={{ display: "flex" }}>
        {projects.map((project, idx) => (
          <AnimationOnScroll
            animateIn="animate__fadeInRightBig"
            animateOnce="true"
          >
            <Project project={project} key={"project" + idx} />
          </AnimationOnScroll>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
