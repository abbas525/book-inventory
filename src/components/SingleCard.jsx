import { Button, Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleCard = ({ book, status, vertical }) => {
    return (
        <>
            {vertical ?
                (
                    <Card className="rounded-0 border-0 h-100 d-flex flex-row  pb-4 align-items-center">
                         <Link  to={`/books/${book.url}`}>
                        <figure className="position-relative mb-0">
                            <Card.Img variant="top" src={book.cover} className="img-fluid rounded-0" />
                            {status && <span className="status-tag px-3 py-1 font-12 text-light bg-success position-absolute">New</span>}
                        </figure>
                        </Link>
                        <Card.Body className="px-1 ps-3">
                            <Card.Title className="fs-6 mt-2 mb-1">{book.title}</Card.Title>
                            <Card.Text className="text-muted mb-1">
                                {book.author}
                            </Card.Text>
                            <Stack direction="horizontal">
                                <span className="text-danger fw-bold">{book.price}</span>
                                {/* <Button className="ms-auto btn-sm rounded-pill" variant="outline-success">See Details</Button> */}
                            </Stack>
                        </Card.Body>

                    </Card>
                )
                :
                (
                    <Card className="rounded-0 border-0 h-100">
                        <Link  to={`/books/${book.url}`}>
                            <figure className="position-relative mb-0">
                                <Card.Img variant="top" src={book.cover} className="img-fluid rounded-0" />
                                {status && <span className="status-tag px-3 py-1 font-12 text-light bg-success position-absolute">New</span>}
                            </figure>
                        </Link>
                        <Card.Body className="px-2">
                            <Card.Title className="fs-6 mt-2">{book.title}</Card.Title>
                            <Card.Text className="text-muted">
                                {book.author}
                            </Card.Text>
                            <Stack direction="horizontal">
                                <span className="text-danger fw-bold">{book.price}</span>
                                <Link  to={`/books/${book.url}`} className="ms-auto btn-sm rounded-pill btn btn-outline-success"  >See Details</Link>
                            </Stack>
                        </Card.Body>
                    </Card>
                )}
        </>


    );
}

export default SingleCard;