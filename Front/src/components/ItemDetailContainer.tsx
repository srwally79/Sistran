import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerProductoPorId } from "../services/api";
import ItemDetail from "./ItemDetail";
import type { Producto } from "../types";

function ItemDetailContainer() {
  const { id } = useParams<{ id: string }>();
  const [producto, setProducto] = useState<Producto | null>(null);

  useEffect(() => {
    if (id) {
      obtenerProductoPorId(id)
        .then((p) => setProducto(p ?? null))
        .catch(console.error);
    }
  }, [id]);

  if (!producto) return <p className="m-4">Cargando...</p>;

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
