import { Col, Container, Row } from "react-bootstrap";
import CardsRow from "./components/cards/CardsRow";
import MoviesGrid from "./components/MoviesGrid";
import HeaderCarousel from "./components/HeaderCarousel";

const HomePage = ({books}) => {
    


    return ( 
        <div className="homepage">
             <HeaderCarousel books={books} />
             <MoviesGrid books={books} />
            <section>
            <Container>
                <Row>
                <Col lg="8">
                    <div className=' bg-white p-4 mb-4'>
                    <h2 className='mb-3'>For Little Readers</h2>
                    <CardsRow books={books} count="4" />
                    </div>
                    <div className=' bg-white p-4 mb-4'>
                    <h2 className='mb-3'>Self Development</h2>
                    <CardsRow books={books} count="4" />
                    </div>
                </Col>
                <Col lg="4">
                    <div className='best-sellers bg-white p-4 pb-0'>
                    <h2 className='mb-3'>Best Sellers</h2>
                    <CardsRow books={books} count="5" vertical={true} />
                    </div>
                </Col>
                </Row>
            </Container>
        </section>
        </div>
     );
}
 
export default HomePage;