import { Navbar, Nav, Container, Badge, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.jpeg";

function NavBar() {
  const { cantidadProductos } = useCart();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <Image
            src={logo}
            alt="Ropa Don Pepe"
            height="30"
            className="me-2"
            rounded
          />
          Ropa Don Pepe
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Catálogo
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/checkout">
            <FontAwesomeIcon icon={faShoppingCart} />
            <Badge bg="light" text="dark" className="ms-1">
              {cantidadProductos}
            </Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
