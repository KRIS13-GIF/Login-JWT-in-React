import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
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
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navbark;
