import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavbarMain = () => {
    return ( 
        <Navbar expand="lg" className="shadow-sm fixed-top">
        <Container>
          <Navbar.Brand href="/">Books Inventrory</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
             <Nav.Link href="/all-books" className="me-4">All Books</Nav.Link>
              <Nav.Link href="/add-book">Add Book</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}
 
export default NavbarMain;