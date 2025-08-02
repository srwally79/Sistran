import { Table } from "react-bootstrap";
import { useCart } from "../context/CartContext";

function Brief() {
  const { cart } = useCart();

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((p) => (
          <tr key={p.id}>
            <td>{p.nombre}</td>
            <td>{p.cantidad}</td>
            <td>${p.precio}</td>
            <td>${p.precio * p.cantidad}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Brief;
