import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from "react";
import { useParams } from 'react-router-dom';

function Navbark() {
    const { id } = useParams();
    console.log(id)

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href={`/user/products/${id}`}>Products</Nav.Link>
                    <Nav.Link href={`/user/create/${id}`}>Create Product</Nav.Link>
                    
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navbark;
