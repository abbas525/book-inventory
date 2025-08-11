import { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDataContext } from "./api/dataContext";

const BookDetail = () => {
    const { slug } = useParams()
    const navigate = useNavigate();
    const { books, deleteBook } = useDataContext(); 
    const [show, setShow] = useState(false);
 

    
    
   
    const book = books.find((book) => book.url === slug);

    const handleConfirm = (bookId) => {
        deleteBook( bookId); 
        setShow(false)
        navigate('/')
    }

    const modalUi = (
        <Modal show={show} onHide={ () => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Removing Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove this book parmanently?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ () => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleConfirm(book.id)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    )
 

    return (
        <div className="book-detail d-flex align-items-center mt-100"  >

            {modalUi}
            <Container>
                <div className="text-end">
                    <button className="btn btn-danger" onClick={() => setShow(true)}>
                        Remove Book
                    </button>
                </div>
                {book ? (
                    <Row>
                        <Col md="5">
                            <div className="text-center">
                                <img src={book.cover} alt="" className="img-fluid " />
                            </div>
                        </Col>
                        <Col md="7">
                            <div className="text-content">
                                <h1>{book.title}</h1>
                                <p>by <strong>{book.author}</strong></p>
                                <div className="details pb-5 border-bottom border-1">
                                    <p className="fst-italic" dangerouslySetInnerHTML={{
                                        __html: book.intro.replace(/\n/g, "<br />")
                                    }}> 
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                ) : (
                    <h1>Page Not Found</h1>
                )
                }

            </Container>
        </div>
    );
}

export default BookDetail;