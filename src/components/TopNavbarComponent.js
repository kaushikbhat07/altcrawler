import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./TopNavbarComponent.css";

function TopNavbarComponent() {
    return (
        <Navbar
            fixed="top"
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
            id="top-navbar"
            className="shadow"
        >
            <Container>
                <Navbar.Brand href="/">Alt Crawler</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Link
                            className="nav-link nav-reduce-top-bottom-padding"
                            to="/"
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbarComponent;
