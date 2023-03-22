import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer class="text-center">
      <div class="container p-4">
        <section class="mb-4">
          {/* <a
            class="btn btn-primary btn-floating m-1"
            style={{ "background-color": "#3b5998" }}
            href="https://www.facebook.com/johnathan.nguyen.94/"
            role="button"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </a> */}

          <a
            class="btn btn-primary btn-floating m-1 anim-icon bounce"
            style={{ "background-color": "#55acee" }}
            href="https://twitter.com/jthnguyen9909"
            role="button"
          >
            <i class="fab fa-twitter"></i>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>

          <a
            class="btn btn-primary btn-floating m-1 anim-icon bounce"
            style={{ "background-color": "#dd4b39" }}
            href="mailto:jthnguyen9909.work@gmail.com"
            role="button"
          >
            <FontAwesomeIcon icon={["fab", "google"]} />
          </a>

          {/* <a
            class="btn btn-primary btn-floating m-1"
            style={{ "background-color": "#ac2bac" }}
            href="https://www.instagram.com/flabberdog/"
            role="button"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a> */}

          <a
            class="btn btn-primary btn-floating m-1 anim-icon bounce"
            style={{ "background-color": "#0082ca" }}
            href="https://www.linkedin.com/in/jthnguyen9909/"
            role="button"
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </a>
          <a
            class="btn btn-primary btn-floating m-1 anim-icon bounce"
            style={{ "background-color": "#333333" }}
            href="https://github.com/jthnguyen9909"
            role="button"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </section>

        <section class="mb-4">
          <p>
            Feel free to reach out and connect with me on my socials or email me
            at:
          </p>
          <a className="email" href="mailto:jthnguyen9909.work.gmail.com">
            jthnguyen9909.work@gmail.com
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
