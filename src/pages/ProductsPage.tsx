import { useMemo, useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import ProductFilters, { type ProductSort } from '../components/product/ProductFilters';
import ProductGrid from '../components/product/ProductGrid';
import { products } from '../data/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<ProductSort>('default');

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const matchesCategory = selectedCategory === '全部' || product.category === selectedCategory;
      const matchesKeyword =
        keyword.length === 0 ||
        [product.name, product.category, product.tag, product.shortDescription]
          .join(' ')
          .toLowerCase()
          .includes(keyword);

      return matchesCategory && matchesKeyword;
    });

    return [...filtered].sort((a, b) => {
      if (sort === 'price-asc') {
        return a.price - b.price;
      }
      if (sort === 'price-desc') {
        return b.price - a.price;
      }
      return 0;
    });
  }, [search, selectedCategory, sort]);

  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <SectionTitle
        eyebrow="Shop all"
        title="全部商品"
        description="按分类、关键词和价格排序，找到最适合今天状态的手账文具。"
      />
      <ProductFilters
        selectedCategory={selectedCategory}
        search={search}
        sort={sort}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearch}
        onSortChange={setSort}
      />
      <ProductGrid products={filteredProducts} />
    </section>
  );
}
