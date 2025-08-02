import { useCart } from "../context/CartContext";
import { Container, Table, Button } from "react-bootstrap";

function Checkout() {
  const { cart, total, clearCart } = useCart();

  return (
    <Container className="mt-4">
      <h2>Resumen de compra</h2>
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
      <h4>Total: ${total}</h4>
      <Button variant="danger" onClick={clearCart}>
        Finalizar compra
      </Button>
    </Container>
  );
}

export default Checkout;
