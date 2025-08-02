import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { Producto } from "../types";

function ItemQuantitySelector({ producto }: { producto: Producto }) {
  const [cantidad, setCantidad] = useState(1);
  const { addItem } = useCart();

  const aumentar = () =>
    setCantidad((c) => Math.min(producto.inventario, c + 1));
  const disminuir = () => setCantidad((c) => Math.max(1, c - 1));

  return (
    <div>
      <ButtonGroup className="me-2">
        <Button onClick={disminuir}>-</Button>
        <Button variant="light" disabled>
          {cantidad}
        </Button>
        <Button onClick={aumentar}>+</Button>
      </ButtonGroup>
      <Button onClick={() => addItem(producto, cantidad)} variant="success">
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemQuantitySelector;
