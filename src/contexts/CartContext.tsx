"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export interface CartItem {
  id: number;
  name: string;
  code: string;
  category: string;
  specs: string;
  startDate: string;
  endDate: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "startDate" | "endDate">, startDate: string, endDate: string) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  updateItemDates: (id: number, startDate: string, endDate: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((item: Omit<CartItem, "startDate" | "endDate">, startDate: string, endDate: string) => {
    setItems((prev) => [
      ...prev,
      {
        ...item,
        startDate,
        endDate,
      },
    ]);
  }, []);

  const removeItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const updateItemDates = useCallback((id: number, startDate: string, endDate: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, startDate, endDate } : item
      )
    );
  }, []);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, updateItemDates }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
