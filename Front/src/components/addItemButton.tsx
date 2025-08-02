import { Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import type { Props } from "../types";

function AddItemButton({ producto, cantidad }: Props) {
  const { addItem } = useCart();

  return (
    <Button variant="success" onClick={() => addItem(producto, cantidad)}>
      Agregar al carrito
    </Button>
  );
}

export default AddItemButton;
