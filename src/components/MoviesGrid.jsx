import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import SingleCard from "./SingleCard";

const MoviesGrid = ({ books }) => {
    return (
        <section className="main--movies-grid">
            <Container>
                <h2 className="section-title pb-4 text-center">Our Recommendations</h2>
                <Row className=" ">
                    {books.map((book) => (
                        book.recommended && <Col sm="4" md="3" xl="2" key={book.id}>
                            <SingleCard book={book} status={book.status}/>
                        </Col >
                    ))}
                </Row>
            </Container>
        </section>

    );
}

export default MoviesGrid;