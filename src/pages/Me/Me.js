function AboutMe() {
  return (
    <div className="about-text">
      <section className="about-me">
        <p>
          Hello there! I'm Johnathan Nguyen, and I'm hoping to further my career
          as a full-stack developer. I studied at and completed UC Irvine's
          Coding Bootcamp, and am currently improving my skills with React which
          I used to build this portfolio, and I'm also looking into learning
          Next.js as my next step to keep up with modern programming skills!{" "}
        </p>
        <p>
          As for activities outside of programming, I enjoy playing video games
          and video game development, learning about and experiencing new tech
          especially involving computers, and I also playing tennis!
        </p>
      </section>
      <section className="proficiencies">
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutMe;
