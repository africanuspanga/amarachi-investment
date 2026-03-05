"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import CartModal from "./CartModal";
import { useCart } from "@/contexts/CartContext";

export default function ClientCartWrapper({ children }: { children: React.ReactNode }) {
  const { items } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Navbar cartCount={items.length} onCartClick={() => setIsCartOpen(true)} />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
