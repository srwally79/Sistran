import { Card, Button, Col } from "react-bootstrap";
import type { Producto } from "../types";

function Item({ producto }: { producto: Producto }) {
  return (
    <Col md={4} className="mb-3">
      <Card>
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            ${producto.precio}
          </Card.Subtitle>
          <Button as={"a"} href={`/producto/${producto.id}`} variant="primary">
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
