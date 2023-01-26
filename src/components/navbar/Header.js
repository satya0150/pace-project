import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

import { Navbar, Nav, Container, NavDropdown, Offcanvas, Form } from 'react-bootstrap';
import { useUserAuth } from '../../context/UserAuthContext';


const Header = () => {
    const { user, logOut } = useUserAuth();
    const handleLogout = async () => {
        try{
            await logOut();
        }catch(err){
            console.log(err.message);
        }
    }
    return (
        <>
            {['xl'].map((expand) => (
                <Navbar key={expand} expand={expand}>
                    <Container fluid>
                        <Navbar.Brand href="#"><img src='dplogo.png' alt='' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img src='dplogo.png' alt='' />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3 ">
                                    <Nav.Link href="/" className='navlink1'>Home</Nav.Link>
                                    <Nav.Link href="#" disabled>About us</Nav.Link>

                                </Nav>
                                <Form className="d-flex">

                                    <NavDropdown title={user && user.email} id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={handleLogout}>Sign Out</NavDropdown.Item>
                                    </NavDropdown>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default Header;