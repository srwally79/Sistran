import Item from "./Item";
import { Row } from "react-bootstrap";
import { Producto } from "../types";

function ItemList({ productos }: { productos: Producto[] }) {
  return (
    <Row>
      {productos.map((prod) => (
        <Item key={prod.id} producto={prod} />
      ))}
    </Row>
  );
}

export default ItemList;
