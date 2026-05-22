import type { Product } from '../../data/products';
import ProductCard from './ProductCard';

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-[1.75rem] border border-dashed border-stone-300 bg-white/70 p-10 text-center">
        <h3 className="text-xl font-black">暂时没有找到匹配商品</h3>
        <p className="mt-2 text-stone-600">可以换个关键词，或切回全部分类看看。</p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
