import { CheckCircle2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { buttonStyles } from '../components/common/Button';
import type { OrderResult } from '../services/order';
import { formatCurrency } from '../utils/format';

function readLastOrder(): OrderResult | null {
  const state = window.history.state?.usr as OrderResult | undefined;
  if (state?.orderNumber) {
    return state;
  }

  const stored = window.localStorage.getItem('dopafun:last-order');
  if (!stored) {
    return null;
  }

  try {
    return JSON.parse(stored) as OrderResult;
  } catch {
    return null;
  }
}

export default function SuccessPage() {
  useLocation();
  const order = readLastOrder();

  return (
    <section className="mx-auto max-w-3xl px-5 py-16 text-center">
      <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-lime-100">
        <CheckCircle2 className="h-10 w-10 text-lime-700" />
      </div>
      <h1 className="mt-6 text-4xl font-black">订单已创建</h1>
      <p className="mt-3 leading-7 text-stone-600">
        这是一个模拟订单，未发起真实支付。上线后可以在服务层接入 Stripe、PayPal 或 Shopify Checkout。
      </p>
      <div className="mt-8 rounded-[1.75rem] border border-stone-200 bg-white p-6 text-left shadow-soft">
        <div className="flex justify-between gap-4 border-b border-stone-200 pb-4">
          <span className="text-stone-600">模拟订单号</span>
          <span className="font-black">{order?.orderNumber ?? 'DOPA-DEMO-ORDER'}</span>
        </div>
        <div className="flex justify-between gap-4 pt-4">
          <span className="text-stone-600">订单金额</span>
          <span className="font-black">{formatCurrency(order?.total ?? 0)}</span>
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link to="/" className={buttonStyles('primary', 'lg')}>
          返回首页
        </Link>
        <Link to="/products" className={buttonStyles('outline', 'lg')}>
          继续购物
        </Link>
      </div>
    </section>
  );
}
