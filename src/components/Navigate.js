import { Navbar, Container } from "react-bootstrap";

const Navigate = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Movie List</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Indra Tristia</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigate;
