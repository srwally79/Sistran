import { useEffect, useState } from "react";
import { Form, Container, Row } from "react-bootstrap";
import {
  obtenerCategorias,
  obtenerProductosPorCategoria,
} from "../services/api";
import type { Categoria, Producto } from "../types";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<
    number | null
  >(null);
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    obtenerCategorias().then(setCategorias).catch(console.error);
  }, []);

  useEffect(() => {
    if (categoriaSeleccionada !== null) {
      obtenerProductosPorCategoria(categoriaSeleccionada)
        .then(setProductos)
        .catch(console.error);
    }
  }, [categoriaSeleccionada]);

  return (
    <Container className="mt-4">
      <Form.Group controlId="categoriaSelect" className="mb-4">
        <Form.Label>Selecciona una categoría:</Form.Label>
        <Form.Select
          value={categoriaSeleccionada ?? ""}
          onChange={(e) => setCategoriaSeleccionada(Number(e.target.value))}
        >
          <option value="">-- Elige una categoría --</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nombre}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {categoriaSeleccionada && (
        <Row>
          <ItemList productos={productos} />
        </Row>
      )}
    </Container>
  );
}

export default ItemListContainer;
