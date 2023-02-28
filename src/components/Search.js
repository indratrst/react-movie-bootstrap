import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
function Main() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Movies DB</h1>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Default
            </InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            // onChange={(e) => search(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>

      <div className="row movie-container"></div>
    </Container>
  )
}
export default Main