import { ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';
import Button, { buttonStyles } from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import { useCart } from '../hooks/useCart';
import { mockCreateCheckoutSession } from '../services/payment';
import { formatCurrency } from '../utils/format';

export default function CartPage() {
  const { items, subtotal, shipping, total, freeShippingRemaining, clearCart } = useCart();

  const startCheckout = async () => {
    await mockCreateCheckoutSession(items);
  };

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-yellow-100">
          <ShoppingBag className="h-9 w-9" />
        </div>
        <h1 className="mt-6 text-4xl font-black">购物车还是空的</h1>
        <p className="mt-3 text-stone-600">去挑一件今天会让你想写手账的小文具吧。</p>
        <Link to="/products" className={buttonStyles('primary', 'lg') + ' mt-8'}>
          去逛商品
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <SectionTitle eyebrow="Cart" title="购物车" description="满 99 元包邮，当前结算流程为模拟订单。" />
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-4">
          {items.map((item) => (
            <CartItem key={item.productId} item={item} />
          ))}
          <Button variant="ghost" className="w-fit" onClick={clearCart}>
            <Trash2 className="h-4 w-4" />
            清空购物车
          </Button>
        </div>
        <aside className="h-fit rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-black">订单摘要</h2>
          <div className="mt-5 grid gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-stone-600">商品小计</span>
              <span className="font-bold">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-600">运费</span>
              <span className="font-bold">{shipping === 0 ? '包邮' : formatCurrency(shipping)}</span>
            </div>
            <div className="border-t border-stone-200 pt-3">
              {freeShippingRemaining > 0 ? (
                <p className="rounded-2xl bg-yellow-50 px-4 py-3 text-stone-700">
                  再买 {formatCurrency(freeShippingRemaining)} 即可包邮
                </p>
              ) : (
                <p className="rounded-2xl bg-lime-50 px-4 py-3 text-stone-700">已满足满 99 包邮</p>
              )}
            </div>
            <div className="flex justify-between border-t border-stone-200 pt-4 text-lg">
              <span className="font-black">总计</span>
              <span className="font-black">{formatCurrency(total)}</span>
            </div>
          </div>
          <Link to="/checkout" className={buttonStyles('primary', 'lg') + ' mt-6 w-full'} onClick={startCheckout}>
            去结算
          </Link>
          <Link to="/products" className={buttonStyles('outline', 'md') + ' mt-3 w-full'}>
            继续购物
          </Link>
        </aside>
      </div>
    </section>
  );
}
