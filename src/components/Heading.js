import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';

const Heading = () => {
    return (
        <div>
            <Navbar color="dark" dark>
                <Container>
                    <NavbarBrand href="/">  CRUD  </NavbarBrand>
                    <Nav>
                        <NavItem>
                            <Link className="btn btn-primary" to="/add">Add user</Link>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Heading;
