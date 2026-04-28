import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function Navbar_one() {
    const navigate = useNavigate()
   
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#Home">
                            <Link to="/home">Home</Link>
                        </Nav.Link>
                        <Nav.Link href="#About"><Link to="/about">About</Link></Nav.Link>
                        <Nav.Link href="#Contact"><Link to="/contact">Contact</Link></Nav.Link>
                    </Nav>
                    <button onClick={() => navigate("/login")}>
                        Login
                    </button>



                </Container>
            </Navbar>



        </>
    )
}

export default Navbar_one