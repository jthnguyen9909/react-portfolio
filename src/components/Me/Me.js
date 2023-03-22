function AboutMe() {
  return (
    <>
      <h2>About Me</h2>
      <div className="about-text">
        <div className="profile-pic">
          <img
            className="pfp"
            src={require("../../assets/pfp/pfp.jpg")}
            alt="profile"
          ></img>
        </div>
        <section className="about-me">
          <p>
            Hello there! I'm Johnathan Nguyen, and I'm hoping to further my
            career as a full-stack developer. I studied at and completed UC
            Irvine's Coding Bootcamp, and am currently improving my skills.
          </p>
          <p>
            Outside of programming, I enjoy playing video games and have an
            interest video game development and new technologies. I also enjoy
            playing tennis recreationally.
          </p>
        </section>
      </div>
    </>
  );
}

export default AboutMe;
