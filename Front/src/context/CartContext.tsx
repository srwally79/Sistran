import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { CartItem, Producto, CartContextType } from "../types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const stored = sessionStorage.getItem("carrito");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  const addItem = (producto: Producto, cantidad: number) => {
    const existing = cart.find((p) => p.id === producto.id);
    if (existing) {
      alert("Este producto ya está en el carrito");
      return;
    } else {
      setCart([...cart, { ...producto, cantidad }]);
    }
  };

  const removeItem = (id: number) => setCart(cart.filter((p) => p.id !== id));
  const clearCart = () => setCart([]);
  const cantidadProductos = cart.length;

  const total = cart.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  const cantidadTotal = cart.reduce((acc, p) => acc + p.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        total,
        cantidadTotal,
        cantidadProductos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
  return context;
};
