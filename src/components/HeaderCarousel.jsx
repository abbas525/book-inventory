
import React from "react";
import { Button, Card, Stack } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const HeaderCarousel = ({ books }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3, // Show 3 items
            slidesToSlide: 1, // Slide 1 at a time
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    return (
        <div className="header--slider py-4 bg-dark">
            <div className="container">
                <Carousel
                    responsive={responsive}
                    showDots={true}
                    infinite={true}
                    removeArrowOnDeviceType={["desktop"]}
                    autoPlay={true}
                >
                    {books.map((book) => (
                        book.featured && <div className="slider-item me-3" key={book.id}>
                            <Card className="rounded-0 border-0 h-100 d-flex p-4 align-items-center flex-row gap-3">
                                <Card.Body className="p-0">
                                    <Card.Title className="fs-4 fw-bold mt-2">{book.title}</Card.Title>
                                    <Card.Text className="text-muted">
                                        {book.author}
                                    </Card.Text>
                                    <Link to={`/books/${book.url}`} className="rounded-0 btn btn-outline-success" >See Details</Link>
                                </Card.Body>
                                <figure className="position-relative mb-0 text-end flex-shrink-0">
                                    <Card.Img variant="top" src={book.cover} className="img-fluid rounded-0" />
                                </figure>
                            </Card>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default HeaderCarousel;
