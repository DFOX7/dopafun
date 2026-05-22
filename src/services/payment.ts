import type { CartLineItem } from '../context/CartContext';

export type CheckoutSession = {
  id: string;
  status: 'mocked';
  url: string;
};

export async function mockCreateCheckoutSession(items: CartLineItem[]): Promise<CheckoutSession> {
  await new Promise((resolve) => window.setTimeout(resolve, 200));

  return {
    id: `mock_checkout_${Date.now()}`,
    status: 'mocked',
    url: '/checkout',
  };
}

// 未来上线时，可在这里替换为 Stripe Checkout / Shopify Checkout 的真实会话创建接口。
