import { Col, Card, Button, Modal, ListGroup, Row } from "react-bootstrap";
import { getModal, searchMovie } from "../api";
import { useEffect, useState } from 'react';



function Cards({ listMovie }) {
  const [modal, setModal] = useState([])
  // useEffect(() => {
  //   getModal().then((result) => {
  //     setModal(result)
  //   })
  // }, [])
  useEffect(() => {
    searchMovie().then((result) => {
      setModal(result)
    })
  }, [])

  console.log({ modal: modal });



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async (e) => {
    setShow(true);
    const coba = await getModal(e.target.value)
    setModal(coba)
    console.log({ mov: coba });
  }



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const coba = await getModal(e.target.value)
  //   setModal(coba)
  //   console.log({ mov: coba });
  //   console.log({ coba });
  // }
  const AppearModal = () => {
    return listMovie.map(function (modalMovie) {
      return (
        <Row>
          <Modal show={show} onHide={handleClose} key={modalMovie.imdbID}>
            <Modal.Header closeButton>
              <Modal.Title>{modalMovie.Title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Col md={3}>
                {/* <Card.Img variant="top" src={modalMovie.Poster} /> */}
              </Col>
              <Col>
                <ListGroup>
                  <ListGroup.Item>Actors:{modalMovie.Actors}</ListGroup.Item>
                  <ListGroup.Item>{modalMovie.Writer}</ListGroup.Item>
                  <ListGroup.Item>{modalMovie.Runtime}</ListGroup.Item>
                  <ListGroup.Item>{modalMovie.Genre}</ListGroup.Item>
                  <ListGroup.Item>{modalMovie.Country}</ListGroup.Item>
                </ListGroup>
              </Col>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>

      )
    })
  }


  return (
    listMovie && listMovie.map(function (movie) {
      return (
        <Col md={4} className="my-3" key={movie.imdbID}>
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height: '400px' }} variant="top" src={movie.Poster} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>
                {movie.Year}
              </Card.Text>
              <Button variant="primary" value={movie.imdbID} onClick={handleShow}>
                Launch demo modal
              </Button>
              {/* <Button value={movie.imdbID} onClick={handleSubmit} variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          <AppearModal />
        </Col>
      )
    })
  )

}
export default Cards


// function Cards({ listMovie }) {
//   return (
//     listMovie && listMovie.map(function (movie) {
//       return (
//         <Col md={4} className="my-3" key={movie.id}>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img style={{ height: '400px' }} variant="top" src={`${process.env.REACT_APP_IMAGE}/${movie.poster_path}`} />
//             <Card.Body>
//               <Card.Title>{movie.title}</Card.Title>
//               <Card.Text>
//                 {movie.release_date}
//               </Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       )
//     })
//   )

// }