import { Card, Container } from "react-bootstrap";
import ItemQuantitySelector from "./ItemQuantitySelector";
import { Producto } from "../types";

function ItemDetail({ producto }: { producto: Producto }) {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>Precio: ${producto.precio}</Card.Text>
          <Card.Text>Inventario: {producto.inventario}</Card.Text>
          <ItemQuantitySelector producto={producto} />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ItemDetail;
