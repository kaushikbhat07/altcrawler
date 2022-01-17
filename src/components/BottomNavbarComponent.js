import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function BottomNavbarComponent() {
    return (
        <Navbar
            expand="lg"
            bg="dark"
            variant="dark"
            id="bottom-navbar"
            className="footer"
        >
            <Container className="justify-content-center">
                <div className="text-light m-0">
                    <small>&copy; Alt crawler 2022</small>
                </div>
            </Container>
        </Navbar>
    );
}

export default BottomNavbarComponent;
