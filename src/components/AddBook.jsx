import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDataContext } from "../api/dataContext";
import { useNavigate } from "react-router-dom";

function AddBook() {
    const navigate = useNavigate()
    const {handleAddBook} = useDataContext()
    const [formState, setFormState] = useState({
        title: "",
        author: "",
        price: 0,
        status: false,
        cover: null,
         recommended: false,
          bestSeller: false, 
          featured: false,
        intro: "",
        url: ''
    });

    const handleFormData = (e) => { 
        const { name, value, type, files, checked } = e.target; 

        if(type === 'file' && files.length > 0) {
            // const imgURL = URL.createObjectURL(files[0]); 
           
            const file = files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const base64String = reader.result; 
                localStorage.setItem("coverImage", base64String);  
                setFormState((prev) => (
                    {...prev,
                        [name]: base64String
                    }
                ))
            };
            reader.readAsDataURL(file); 
        } else {
            setFormState((prev) => (
                {
                    ...prev,
                    [name]: type === 'checkbox' ? checked : value

                }
            ))
        }
    
    }
 
 
    return (
        <div className="add-book mt-56 " onSubmit={(e) => {handleAddBook(e, formState); navigate('/all-books')}}>
            <Container>
                <h1 className="text-dark fs-2 pt-4 pb-3 text-center">Add New Book</h1>

                <Row className="justify-content-center">
                    <Col lg="8">
                        <Form className="p-4 border border-1 shadow-sm">
                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter Title" name="title" value={formState.title} onChange={handleFormData} />
                                </Form.Group>

                                <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter Author Name" name="author" value={formState.author} onChange={handleFormData} />
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control required type="number" placeholder="Enter Price" name="price" value={formState.price} onChange={handleFormData} />
                                </Form.Group>

                                <Form.Group as={Col} className="mb-3" controlId="bookUrl">
                                    <Form.Label>Slug</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter Url" name="url" value={formState.url} onChange={handleFormData} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formFile" className="mb-3">
                                    <Form.Label>Upload Book Cover</Form.Label>
                                    <Form.Control required type="file" name="cover"   onChange={handleFormData} />
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Check  type="checkbox" label="New" name="status" checked={formState.status} onChange={handleFormData} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formCat" className="mb-3" >
                                    <Form.Label>Category</Form.Label>
                                    <div className="d-flex justify-content-between">
                                        <Form.Check
                                            type="checkbox"
                                            label="Recommended"
                                            name="recommended"
                                            checked={formState.recommended}
                                            onChange={handleFormData}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Best Seller"
                                            name="bestSeller"
                                            checked={formState.bestSeller}
                                            onChange={handleFormData}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Featured"
                                            name="featured"
                                            checked={formState.featured}
                                            onChange={handleFormData}
                                        />
                                    </div>
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Control
                                     required
                                    as="textarea"
                                    value={formState.intro}
                                    onChange={handleFormData}
                                    placeholder="Leave a comment here"
                                    name="intro"
                                    style={{ height: '200px' }}
                                />
                            </Form.Group>



                            <Button variant="success" type="submit">
                                Add Book
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AddBook