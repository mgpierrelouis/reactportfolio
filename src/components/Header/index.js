import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

// import ProjectInfo from '../Project/projectsinfo.json'

function Header() {
    // const [data, setdata] = useState(ProjectInfo)

    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Michael Pierre-Louis</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/About">About</Nav.Link>
      <Nav.Link href="https://github.com/mgpierrelouis/resume/raw/main/Resume.pdf">Resume</Nav.Link>
      <NavDropdown title="Contact" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://github.com/mgpierrelouis">Github</NavDropdown.Item>
        <NavDropdown.Item href="https://www.linkedin.com/in/michael-pierre-louis-7163b2bb/">Linkedin</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item >Email: mgpierrelouis@gmail.com</NavDropdown.Item>
        <NavDropdown.Item >Phone: 980.267.2600</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Header