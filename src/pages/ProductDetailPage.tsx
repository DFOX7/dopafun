import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Button, { buttonStyles } from '../components/common/Button';
import GradientProductImage from '../components/common/GradientProductImage';
import SectionTitle from '../components/common/SectionTitle';
import ProductGrid from '../components/product/ProductGrid';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/format';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const recommendations = useMemo(() => {
    if (!product) {
      return [];
    }

    return products
      .filter((candidate) => candidate.id !== product.id && candidate.category !== product.category)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-6 text-sm text-stone-500">
        <Link to="/products" className="font-semibold text-stone-700 hover:text-stone-950">
          全部商品
        </Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-4 shadow-soft">
          <GradientProductImage image={product.images[0]} className="min-h-[360px]" />
        </div>
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-stone-900 px-3 py-1 text-sm font-bold text-white">
              {product.tag}
            </span>
            <span className="rounded-full bg-stone-100 px-3 py-1 text-sm font-bold text-stone-600">
              {product.category}
            </span>
          </div>
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">{product.name}</h1>
          <p className="mt-5 text-lg leading-8 text-stone-600">{product.description}</p>
          <div className="mt-6 flex items-end gap-3">
            <span className="text-3xl font-black">{formatCurrency(product.price)}</span>
            {product.originalPrice ? (
              <span className="text-stone-400 line-through">{formatCurrency(product.originalPrice)}</span>
            ) : null}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
              <h2 className="font-black">材质与规格</h2>
              <ul className="mt-3 grid gap-2 text-sm text-stone-600">
                {product.specs.map((spec) => (
                  <li key={spec}>• {spec}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
              <h2 className="font-black">适用场景</h2>
              <ul className="mt-3 grid gap-2 text-sm text-stone-600">
                {product.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-full border border-stone-200 bg-white p-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                aria-label="减少数量"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-black">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity((value) => value + 1)}
                aria-label="增加数量"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button size="lg" onClick={() => addItem(product.id, quantity)}>
              <ShoppingBag className="h-5 w-5" />
              加入购物车
            </Button>
            <Link to="/cart" className={buttonStyles('outline', 'lg')}>
              去结算
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <SectionTitle eyebrow="Mix and match" title="推荐搭配" />
        <ProductGrid products={recommendations} />
      </div>
    </section>
  );
}
