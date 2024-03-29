import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

function Proficiencies() {
  return (
    <div id="prof-section" className="proficiencies-container scroll-section">
      <h2>Proficiencies</h2>
      <div className="prof-text">
        <section className="proficiencies">
          <ul className="skills">
            <AnimationOnScroll
              animateIn="animate__fadeInLeftBig"
              animateOnce="true"
              duration="3"
            >
              <i className="logo html-logo anim-icon bounce"></i>
              <i className="logo css-logo anim-icon bounce"></i>
              <i className="logo js-logo anim-icon bounce"></i>
              <i className="logo csharp-logo anim-icon bounce"></i>
              <i className="logo git-logo anim-icon bounce"></i>
              <i className="logo node-logo anim-icon bounce"></i>
              <i className="logo jquery-logo anim-icon bounce"></i>
              <i className="logo sql-logo anim-icon bounce"></i>
              <i className="logo sequelize-logo anim-icon bounce"></i>
              <i className="logo mongo-logo anim-icon bounce"></i>
              <i className="logo react-logo anim-icon bounce"></i>
              <i className="logo java-logo anim-icon bounce"></i>
            </AnimationOnScroll>
          </ul>
        </section>
        <section className="prof-summary">
          <div>
            <p>
              Strong foundation in building web applications utilizing both
              Front-End and Back-End technologies including HTML, CSS,
              JavaScript,Node.js, Express.js, MySQL, MongoDB, and React.js
            </p>
            <p>
              Open-minded, quick to adapt, enjoy working in a team environment
            </p>
            <p>
              Currently developing my skills with C# and delving into how to
              develop games in Unity
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Proficiencies;
