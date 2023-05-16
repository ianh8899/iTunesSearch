import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>iTunes Search App</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Search</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/favourites">
                        <Nav.Link>Favourites</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
