import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

function AboutMe() {
  return (
    <div>
      <h2 id="about-section" className="about-me-h2 scroll-section">
        About Me
      </h2>
      <div className="about-text">
        <div className="profile-pic">
          <img
            className="pfp"
            src={require("../../assets/pfp/pfp.jpg")}
            alt="profile"
          ></img>
        </div>

        <section className="about-me">
          {" "}
          <AnimationOnScroll
            animateIn="animate__fadeInRightBig"
            animateOnce="true"
          >
            <p>
              I'm a Full Stack Developer looking to improve my knowledge and
              experience after graduating from University of California Irvine's
              Coding Bootcamp. I hope to invest myself in this constantly
              evolving industry and look forward to connecting with you!
            </p>
            <p>
              Outside of programming, I enjoy playing video games and thus have
              an interest video game development. I also enjoy playing tennis
              recreationally!
            </p>
          </AnimationOnScroll>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
