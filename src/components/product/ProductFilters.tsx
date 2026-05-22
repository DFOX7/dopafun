import { Search } from 'lucide-react';
import { categories } from '../../data/products';
import { cn } from '../../utils/cn';

export type ProductSort = 'default' | 'price-asc' | 'price-desc';

type ProductFiltersProps = {
  selectedCategory: string;
  search: string;
  sort: ProductSort;
  onCategoryChange: (category: string) => void;
  onSearchChange: (value: string) => void;
  onSortChange: (sort: ProductSort) => void;
};

export default function ProductFilters({
  selectedCategory,
  search,
  sort,
  onCategoryChange,
  onSearchChange,
  onSortChange,
}: ProductFiltersProps) {
  return (
    <div className="mb-8 rounded-[1.75rem] border border-stone-200 bg-white/85 p-4 shadow-sm">
      <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="搜索手账本、贴纸、套装..."
            className="h-12 w-full rounded-2xl border border-stone-200 bg-white pl-11 pr-4 text-sm outline-none focus:border-stone-900 focus:ring-4 focus:ring-yellow-100"
          />
        </label>
        <select
          value={sort}
          onChange={(event) => onSortChange(event.target.value as ProductSort)}
          className="h-12 rounded-2xl border border-stone-200 bg-white px-4 text-sm outline-none focus:border-stone-900 focus:ring-4 focus:ring-yellow-100"
        >
          <option value="default">默认排序</option>
          <option value="price-asc">价格从低到高</option>
          <option value="price-desc">价格从高到低</option>
        </select>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-semibold transition',
              selectedCategory === category
                ? 'bg-stone-900 text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200',
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
