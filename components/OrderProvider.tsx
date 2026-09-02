"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { OrderItem } from "@/lib/generateWhatsAppMessage";

type MenuItem = Omit<OrderItem, "quantity"> & {
  description: string;
  category: string;
  image: string;
  badge?: string;
};
type CartItem = MenuItem & { quantity: number };

type OrderContextValue = {
  items: CartItem[];
  itemCount: number;
  total: number;
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearOrder: () => void;
};

const OrderContext = createContext<OrderContextValue | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("realv-order");
    if (saved) {
      try {
        // Hydrate persisted cart data after the initial server render.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setItems(JSON.parse(saved) as CartItem[]);
      } catch {
        window.localStorage.removeItem("realv-order");
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem("realv-order", JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback((item: MenuItem) => {
    setItems((current) => {
      const existing = current.find((entry) => entry.id === item.id);
      if (existing) {
        return current.map((entry) =>
          entry.id === item.id
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry,
        );
      }
      return [...current, { ...item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback(
    (id: string) => setItems((current) => current.filter((item) => item.id !== id)),
    [],
  );

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.id !== id));
    } else {
      setItems((current) =>
        current.map((item) => (item.id === id ? { ...item, quantity } : item)),
      );
    }
  }, []);

  const clearOrder = useCallback(() => setItems([]), []);
  const value = useMemo(
    () => ({
      items,
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      addItem,
      removeItem,
      updateQuantity,
      clearOrder,
    }),
    [items, addItem, removeItem, updateQuantity, clearOrder],
  );

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) throw new Error("useOrder must be used within an OrderProvider");
  return context;
}

export type { MenuItem };
