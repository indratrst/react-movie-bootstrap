import Navigate from "./components/Navigate";
import { useState } from "react";
import { searchMovie, getDetail } from "./api";
import {
  Container,
  Row,
  Col,
  FormControl,
  InputGroup,
  Card,
  Button,
  Modal,
  ListGroup,
} from "react-bootstrap";
// import Cards from './components/Cards';
function App() {
  const [listMovie, setMovieList] = useState([]);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   getMovies().then((result) => {
  //     setMovieList(result)
  //   })
  // }, [])
  console.log({ data: listMovie });

  const [getModal, setModal] = useState([]);
  // useEffect(() => {
  //   getDetail().then((res) => {
  //     setModal(res)
  //   })
  // }, [])
  console.log({ modal: getModal });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async (e) => {
    setShow(true);
    const detail = await getDetail(e.target.value);
    setModal([detail]);
    console.log({ detail: detail });
    // console.log(e.target.value);
  };

  function StyleModal() {
    return getModal.map((m) => {
      return (
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{m.Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex">
            <Col md={3}>
              <Card.Img variant="top" src={m.Poster} />
            </Col>
            <Col className="ms-3">
              <ListGroup>
                <ListGroup.Item>
                  <strong>Actors:</strong> {m.Actors}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Writer :</strong> {m.Writer}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Runtime :</strong> {m.Runtime}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Genre :</strong> {m.Genre}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Country :</strong> {m.Country}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Modal.Body>
          <Modal.Footer className="d-flex flex-wrap">
            <ListGroup>
              <strong className="">Plot :</strong>
              <p>{m.Plot}</p>
            </ListGroup>
          </Modal.Footer>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    });
  }

  function Daftar() {
    return (
      listMovie &&
      listMovie.map(function (movie, i) {
        return (
          <Col md={4} className="my-3" key={i}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "400px" }}
                variant="top"
                src={movie.Poster}
              />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Year}</Card.Text>
                <Button
                  variant="primary"
                  value={movie.imdbID}
                  onClick={handleShow}
                >
                  Detail Movie
                </Button>
                {/* <Button value={movie.imdbID} onClick={handleSubmit} variant="primary">Go somewhere</Button> */}
              </Card.Body>
              {/* <Modal /> */}
            </Card>
          </Col>
        );
      })
    );
  }

  // <Cards listMovie={listMovie} />
  // console.log({ listMovie: listMovie });

  // const search = async (q) => {
  //   if (q.length > 3) {
  //     // const query = await searchMovie(q)
  //     // setMovieList(query.Search)
  //     // setMovieList(query.results)
  //     // console.log({ query: query })
  //   }
  // }
  const handleSubmit = async () => {
    const query = await searchMovie(search);
    setMovieList(query.Search);
    console.log({ query: query });
  };

  return (
    <>
      <Navigate />
      <Container>
        <Row className="mt-5">
          <Col>
            <h1>React Movie</h1>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <form onSubmit={handleSubmit}>
              <InputGroup className="mb-3">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  onChange={({ target }) => setSearch(target.value)}
                />
                <Button
                  variant="primary"
                  id="inputGroup-sizing-default"
                  onClick={handleSubmit}
                >
                  Search
                </Button>
              </InputGroup>
            </form>
          </Col>
        </Row>
        <div className="movie-container d-flex  align-items-center">
          <Row>
            <Daftar />
          </Row>
        </div>
        <StyleModal />
      </Container>
    </>
  );
}

export default App;
