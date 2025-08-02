import { Producto } from "../types";

const BASE_URL = "http://localhost:5222/api";

export async function obtenerCategorias(): Promise<{ id: number; nombre: string }[]> {
  const res = await fetch(`${BASE_URL}/categorias`);
  if (!res.ok) throw new Error("Error al obtener categorías");
  return res.json();
}

export async function obtenerProductos(): Promise<Producto[]> {
  const res = await fetch(`${BASE_URL}/productos`);
  if (!res.ok) throw new Error("Error al obtener productos");
  return res.json();
}

export async function obtenerProductoPorId(id: string): Promise<Producto | undefined> {
  const res = await fetch(`${BASE_URL}/productos`);
  const productos: Producto[] = await res.json();
  return productos.find(p => p.id.toString() === id);
}

export async function obtenerProductosPorCategoria(categoriaId: number): Promise<Producto[]> {
  const res = await fetch(`${BASE_URL}/productos/categoria/${categoriaId}`);
  if (!res.ok) throw new Error("Error al obtener productos");
  return res.json();
}