import { Col, Container, Row } from "react-bootstrap";
import { useDataContext } from "./api/dataContext";
import SingleCard from "./components/SingleCard";

const AllBooks = () => {

    const {books} = useDataContext()

    return ( 
        <section className="main--movies-grid">
            <Container>
                <h2 className="section-title pb-4 text-center">All Books</h2>
                <Row className=" ">
                    {books.map((book) => (
                        <Col sm="4" md="3" xl="2" key={book.id}>
                            <SingleCard book={book} status={book.status}/>
                        </Col >
                    ))}
                </Row>
            </Container>
        </section>
     );
}
 
export default AllBooks;