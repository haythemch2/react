import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Container,
  Row,
  Navbar,
  Nav,
  NavDropdown,Form,FormControl, Carousel, CarouselItem,ProgressBar, FormGroup
} from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Betadine</Navbar.Brand>
  <Navbar.Toggle/>
  <Navbar.Collapse>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Shop">Shop</Nav.Link>
      <NavDropdown title="Dropdown">
        <NavDropdown.Item href="#">blasa</NavDropdown.Item>
        <NavDropdown.Item href="#">Another blasa</NavDropdown.Item>
        <NavDropdown.Item href="#">7aja</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">devider test</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<Carousel>
  <CarouselItem>
    <img src="https://www.fillmurray.com/640/360" className="d-block w-100" >
    </img>
    <Carousel.Caption>
      <h3>hehe caption </h3>
    </Carousel.Caption>
  </CarouselItem>
  <CarouselItem>
    <img src="https://loremflickr.com/640/360" className="d-block w-100" >
    </img>
    <Carousel.Caption>
      <h3>hehe caption </h3>
    </Carousel.Caption>
  </CarouselItem>
  <CarouselItem>
    <img src="https://baconmockup.com/640/360" className="d-block w-100" >
    </img>
    <Carousel.Caption>
      <h3>hehe caption </h3>
    </Carousel.Caption>
  </CarouselItem>
</Carousel>
<ProgressBar now={60} />
<Form>
  <FormGroup controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </FormGroup>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Why ?</Form.Label>
    <Form.Control as="textarea" rows={1} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>What you want ?</Form.Label>
    <Form.Control as="textarea" rows={5} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </Container>
  );
}

export default App;
