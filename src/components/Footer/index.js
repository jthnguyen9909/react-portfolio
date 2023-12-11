import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="text-center">
      <div className="container p-4">
        <section className="mb-4">
          {/* <a
            className="btn btn-primary btn-floating m-1"
            style={{ "backgroundColor": "#3b5998" }}
            href="https://www.facebook.com/johnathan.nguyen.94/"
            role="button"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </a> */}

          <a
            className="btn btn-primary btn-floating m-1 anim-icon bounce"
            style={{ backgroundColor: "#55acee" }}
            href="https://twitter.com/jthnguyen9909"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>

          <a
            className="btn btn-primary btn-floating m-1 anim-icon bounce"
            style={{ backgroundColor: "#dd4b39" }}
            href="mailto:jthnguyen.work@gmail.com"
            role="button"
          >
            <FontAwesomeIcon icon={["fab", "google"]} />
          </a>

          {/* <a
            className="btn btn-primary btn-floating m-1"
            style={{ "backgroundColor": "#ac2bac" }}
            href="https://www.instagram.com/flabberdog/"
            role="button"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a> */}

          <a
            className="btn btn-primary btn-floating m-1 anim-icon bounce"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/jthnguyen9909/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </a>
          <a
            className="btn btn-primary btn-floating m-1 anim-icon bounce"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/jthnguyen9909"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </section>

        <section className="mb-4">
          <p>
            Feel free to reach out and connect with me on my socials or email me
            at:
          </p>
          <a className="email" href="mailto:jthnguyen.work.gmail.com">
            jthnguyen9909.work@gmail.com
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
