import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../../data/products';
import { useCart } from '../../hooks/useCart';
import { formatCurrency } from '../../utils/format';
import Button from '../common/Button';
import GradientProductImage from '../common/GradientProductImage';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white/90 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Link to={`/products/${product.slug}`} className="block">
        <GradientProductImage image={product.images[0]} />
      </Link>
      <div className="flex flex-1 flex-col pt-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-bold text-stone-600">
            {product.tag}
          </span>
          <span className="text-xs text-stone-500">库存 {product.inventory}</span>
        </div>
        <Link to={`/products/${product.slug}`}>
          <h3 className="text-lg font-black leading-snug hover:text-stone-600">{product.name}</h3>
        </Link>
        <p className="mt-2 min-h-12 text-sm leading-6 text-stone-600">{product.shortDescription}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <div>
            <div className="text-lg font-black">{formatCurrency(product.price)}</div>
            {product.originalPrice ? (
              <div className="text-xs text-stone-400 line-through">
                {formatCurrency(product.originalPrice)}
              </div>
            ) : null}
          </div>
          <Button size="sm" onClick={() => addItem(product.id)}>
            <ShoppingBag className="h-4 w-4" />
            加入
          </Button>
        </div>
      </div>
    </article>
  );
}
