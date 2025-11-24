import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function BasicExample() {
  return (
    <Navbar expand="lg" className="border p-3">
      <Container>
       <input
              type="text"
              placeholder="Search"
              className=" mr-sm-2 border-round w-25 p-1   "
            />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <h4 className='m-auto fw-bold'>MADEDESIGN</h4>
          <Nav>
            <Nav.Link href="#home" className='text-dark'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-dark'>Categories</Nav.Link>
            <a href="" className='text-decoration-none text-dark p-1 fs-5 ' ><i class="ri-twitter-fill"></i></a>
            <a href="" className='text-decoration-none text-dark p-1 fs-5 ' ><i class="ri-facebook-fill"></i></a>
            <a href="" className='text-decoration-none text-dark p-1 fs-5 ' ><i class="ri-instagram-fill"></i> </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;