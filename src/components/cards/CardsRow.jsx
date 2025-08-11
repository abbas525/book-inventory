import { Col, Row } from "react-bootstrap";
import SingleCard from "../SingleCard";

const CardsRow = ({ books, count, vertical }) => {
    return (
        <>
            {vertical ? (
                <Row className=" flex-column ">
                    {books.slice(0, count).map((book) => (
                        book.bestSeller &&
                        <Col key={book.id}>
                           <div>
                            <div></div>
                           <SingleCard book={book} status={false} vertical={vertical}/>
                           </div>
                        </Col>
                    ))}

                </Row>
            ) :
                (
                    <Row className="mb-4">
                        {books.slice(0, count).map((book) => (
                            <Col lg="3" key={book.id}>
                                <SingleCard book={book} status={false} />
                            </Col>
                        ))}

                    </Row>
                )
            }

        </>


    );
}

export default CardsRow;