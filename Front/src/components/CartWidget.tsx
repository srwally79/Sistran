import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";

function CartWidget() {
  const { cantidadProductos } = useCart();

  return (
    <Link to="/checkout" className="text-white text-decoration-none">
      <FontAwesomeIcon icon={faShoppingCart} />
      <Badge bg="light" text="dark" className="ms-1">
        {cantidadProductos}
      </Badge>
    </Link>
  );
}

export default CartWidget;
