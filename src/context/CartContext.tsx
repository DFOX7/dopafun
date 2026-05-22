import { createContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { products, type Product } from '../data/products';

type StoredCartItem = {
  productId: string;
  quantity: number;
};

export type CartLineItem = StoredCartItem & {
  product: Product;
  lineTotal: number;
};

type CartContextValue = {
  items: CartLineItem[];
  rawItems: StoredCartItem[];
  itemCount: number;
  subtotal: number;
  shipping: number;
  total: number;
  freeShippingRemaining: number;
  addItem: (productId: string, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

const CART_STORAGE_KEY = 'dopafun:cart';
const FREE_SHIPPING_THRESHOLD = 99;
const SHIPPING_FEE = 8;

export const CartContext = createContext<CartContextValue | undefined>(undefined);

function readInitialCart(): StoredCartItem[] {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored) as StoredCartItem[];
    return parsed.filter((item) => item.productId && item.quantity > 0);
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [rawItems, setRawItems] = useState<StoredCartItem[]>(readInitialCart);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(rawItems));
  }, [rawItems]);

  const items = useMemo<CartLineItem[]>(() => {
    return rawItems
      .map((item) => {
        const product = products.find((candidate) => candidate.id === item.productId);
        if (!product) {
          return null;
        }

        return {
          ...item,
          product,
          lineTotal: product.price * item.quantity,
        };
      })
      .filter((item): item is CartLineItem => item !== null);
  }, [rawItems]);

  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const freeShippingRemaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);

  const addItem = (productId: string, quantity = 1) => {
    setRawItems((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (existing) {
        return current.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }

      return [...current, { productId, quantity }];
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setRawItems((current) =>
      current.map((item) => (item.productId === productId ? { ...item, quantity } : item)),
    );
  };

  const removeItem = (productId: string) => {
    setRawItems((current) => current.filter((item) => item.productId !== productId));
  };

  const clearCart = () => {
    setRawItems([]);
  };

  const value = useMemo(
    () => ({
      items,
      rawItems,
      itemCount,
      subtotal,
      shipping,
      total,
      freeShippingRemaining,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    }),
    [freeShippingRemaining, itemCount, items, rawItems, shipping, subtotal, total],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
