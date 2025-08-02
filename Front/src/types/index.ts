export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  inventario: number;
  categoria?: string;
}

export interface CartItem extends Producto {
  cantidad: number;
}

export interface CartContextType {
  cart: CartItem[];
  addItem: (producto: Producto, cantidad: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  total: number;
  cantidadTotal: number;
  cantidadProductos: number;
}

export interface Props {
  producto: Producto;
  cantidad: number;
}

export interface Categoria {
  id: number;
  nombre: string;
}

