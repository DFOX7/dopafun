import { Minus, Plus, Trash2 } from 'lucide-react';
import type { CartLineItem } from '../../context/CartContext';
import { useCart } from '../../hooks/useCart';
import { formatCurrency } from '../../utils/format';
import Button from '../common/Button';
import GradientProductImage from '../common/GradientProductImage';

type CartItemProps = {
  item: CartLineItem;
};

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <div className="grid gap-4 rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-sm sm:grid-cols-[120px_1fr]">
      <GradientProductImage image={product.images[0]} className="max-w-[140px] rounded-2xl" />
      <div className="flex flex-col justify-between gap-4">
        <div className="flex flex-col justify-between gap-3 sm:flex-row">
          <div>
            <h3 className="text-lg font-black">{product.name}</h3>
            <p className="mt-1 text-sm text-stone-500">{product.shortDescription}</p>
          </div>
          <div className="font-black">{formatCurrency(item.lineTotal)}</div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center rounded-full border border-stone-200 bg-stone-50 p-1">
            <Button
              variant="ghost"
              size="icon"
              aria-label="减少数量"
              onClick={() => updateQuantity(product.id, quantity - 1)}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-10 text-center font-bold">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              aria-label="增加数量"
              onClick={() => updateQuantity(product.id, quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" size="sm" onClick={() => removeItem(product.id)}>
            <Trash2 className="h-4 w-4" />
            删除
          </Button>
        </div>
      </div>
    </div>
  );
}
