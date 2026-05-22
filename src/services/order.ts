import type { CartLineItem } from '../context/CartContext';
import { generateOrderNumber } from '../utils/order';

export type CheckoutForm = {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  delivery: 'standard' | 'gift';
  note: string;
};

export type OrderResult = {
  orderNumber: string;
  total: number;
  createdAt: string;
};

export type CreateOrderInput = {
  form: CheckoutForm;
  items: CartLineItem[];
  subtotal: number;
  shipping: number;
  total: number;
};

export async function mockCreateOrder(input: CreateOrderInput): Promise<OrderResult> {
  await new Promise((resolve) => window.setTimeout(resolve, 300));

  return {
    orderNumber: generateOrderNumber(),
    total: input.total,
    createdAt: new Date().toISOString(),
  };
}

// 未来上线时，可在这里替换为真实订单数据库、ERP、物流系统或 Shopify Admin API。
