import { Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="text-2xl font-black">dopafun</div>
          <p className="mt-3 max-w-md leading-7 text-stone-600">
            用柔和多巴胺配色和轻负担排版，把计划、灵感和普通一天都记录下来。
          </p>
        </div>
        <div>
          <h3 className="font-bold">站内导航</h3>
          <div className="mt-3 grid gap-2 text-sm text-stone-600">
            <Link to="/products">全部商品</Link>
            <Link to="/about">品牌故事</Link>
            <Link to="/contact">联系我们</Link>
            <Link to="/cart">购物车</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold">品牌联系</h3>
          <div className="mt-3 grid gap-2 text-sm text-stone-600">
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> hello@dopafun.example
            </span>
            <span className="flex items-center gap-2">
              <Instagram className="h-4 w-4" /> @dopafun.stationery
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-stone-200 px-5 py-4 text-center text-sm text-stone-500">
        © 2026 dopafun. 当前为独立站 MVP 演示版本。
      </div>
    </footer>
  );
}
