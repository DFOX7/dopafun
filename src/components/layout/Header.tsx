import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button, { buttonStyles } from '../common/Button';
import { useCart } from '../../hooks/useCart';
import { cn } from '../../utils/cn';

const navItems = [
  { label: '首页', href: '/' },
  { label: '全部商品', href: '/products' },
  { label: '品牌故事', href: '/about' },
  { label: '联系我们', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount } = useCart();

  const navClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'rounded-full px-3 py-2 text-sm font-semibold transition',
      isActive ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-white hover:text-stone-950',
    );

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#fffaf4]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-stone-900 text-xl font-black text-white shadow-sm">
            d
          </div>
          <div>
            <div className="text-xl font-black tracking-tight">dopafun</div>
            <div className="hidden text-xs text-stone-500 sm:block">记录快乐的小文具</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/products"
            className={buttonStyles('ghost', 'icon')}
            aria-label="搜索商品"
            title="搜索商品"
          >
            <Search className="h-5 w-5" />
          </Link>
          <Link to="/cart" className={buttonStyles('primary', 'md')}>
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">购物车</span>
            <span>{itemCount}</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="打开导航"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isOpen ? (
        <nav className="border-t border-stone-200 bg-[#fffaf4] px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={navClass}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
