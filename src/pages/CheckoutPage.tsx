import { FormEvent, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import { Input, Textarea } from '../components/common/Input';
import SectionTitle from '../components/common/SectionTitle';
import { useCart } from '../hooks/useCart';
import { mockCreateOrder, type CheckoutForm } from '../services/order';
import { formatCurrency } from '../utils/format';

type CheckoutErrors = Partial<Record<keyof CheckoutForm, string>>;

const initialForm: CheckoutForm = {
  name: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  delivery: 'standard',
  note: '',
};

function validateCheckoutForm(form: CheckoutForm) {
  const errors: CheckoutErrors = {};

  if (!form.name.trim()) {
    errors.name = '姓名不能为空';
  }
  if (!form.phone.trim()) {
    errors.phone = '手机号不能为空';
  }
  if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = '邮箱格式不正确';
  }
  if (!form.address.trim()) {
    errors.address = '地址不能为空';
  }
  if (!form.city.trim()) {
    errors.city = '城市不能为空';
  }

  return errors;
}

export default function CheckoutPage() {
  const navigate = useNavigate();
  const cart = useCart();
  const [form, setForm] = useState<CheckoutForm>(initialForm);
  const [errors, setErrors] = useState<CheckoutErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (cart.items.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  const updateField = <Key extends keyof CheckoutForm>(key: Key, value: CheckoutForm[Key]) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const submitOrder = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateCheckoutForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    const order = await mockCreateOrder({
      form,
      items: cart.items,
      subtotal: cart.subtotal,
      shipping: cart.shipping,
      total: cart.total,
    });

    window.localStorage.setItem('dopafun:last-order', JSON.stringify(order));
    cart.clearCart();
    navigate('/success', { state: order });
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <SectionTitle eyebrow="Checkout" title="模拟结算" description="这里不会发起真实支付，只会创建一个本地模拟订单。" />
      <form onSubmit={submitOrder} className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-5 rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="姓名"
              value={form.name}
              error={errors.name}
              onChange={(event) => updateField('name', event.target.value)}
            />
            <Input
              label="手机号"
              value={form.phone}
              error={errors.phone}
              onChange={(event) => updateField('phone', event.target.value)}
            />
          </div>
          <Input
            label="邮箱"
            type="email"
            value={form.email}
            error={errors.email}
            onChange={(event) => updateField('email', event.target.value)}
          />
          <div className="grid gap-5 md:grid-cols-[1fr_220px]">
            <Input
              label="收货地址"
              value={form.address}
              error={errors.address}
              onChange={(event) => updateField('address', event.target.value)}
            />
            <Input
              label="城市"
              value={form.city}
              error={errors.city}
              onChange={(event) => updateField('city', event.target.value)}
            />
          </div>
          <label className="block text-sm font-semibold text-stone-700">
            配送方式
            <select
              value={form.delivery}
              onChange={(event) => updateField('delivery', event.target.value as CheckoutForm['delivery'])}
              className="mt-2 h-12 w-full rounded-2xl border border-stone-200 bg-white px-4 text-sm outline-none focus:border-stone-900 focus:ring-4 focus:ring-yellow-100"
            >
              <option value="standard">普通快递 2-4 天</option>
              <option value="gift">礼盒加固包装</option>
            </select>
          </label>
          <Textarea
            label="订单备注"
            value={form.note}
            onChange={(event) => updateField('note', event.target.value)}
            placeholder="例如：希望贴纸不要折叠。"
          />
        </div>

        <aside className="h-fit rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-black">订单摘要</h2>
          <div className="mt-5 grid gap-3">
            {cart.items.map((item) => (
              <div key={item.productId} className="flex justify-between gap-4 text-sm">
                <span className="text-stone-600">
                  {item.product.name} x {item.quantity}
                </span>
                <span className="font-bold">{formatCurrency(item.lineTotal)}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3 border-t border-stone-200 pt-4 text-sm">
            <div className="flex justify-between">
              <span className="text-stone-600">商品小计</span>
              <span className="font-bold">{formatCurrency(cart.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-600">运费</span>
              <span className="font-bold">{cart.shipping === 0 ? '包邮' : formatCurrency(cart.shipping)}</span>
            </div>
            <div className="flex justify-between border-t border-stone-200 pt-4 text-lg">
              <span className="font-black">总计</span>
              <span className="font-black">{formatCurrency(cart.total)}</span>
            </div>
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full" disabled={isSubmitting}>
            {isSubmitting ? '正在创建订单...' : '提交订单'}
          </Button>
        </aside>
      </form>
    </section>
  );
}
