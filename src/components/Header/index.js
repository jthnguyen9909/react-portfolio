import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="header" variant="dark">
      <Container>
        <Navbar.Brand className="navbar-text header-name" href="/">
          Johnathan Nguyen
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav navbar-text-section">
          <Nav className="ms-auto">
            <Nav.Link className="navbar-text active ms-auto" href="/aboutme">
              About Me
            </Nav.Link>
            <Nav.Link className="navbar-text active ms-auto" href="/portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className="navbar-text active ms-auto" href="/contactme">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
