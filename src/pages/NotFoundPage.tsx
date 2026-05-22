import { Link } from 'react-router-dom';
import { buttonStyles } from '../components/common/Button';

export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 text-center">
      <h1 className="text-5xl font-black">页面没有找到</h1>
      <p className="mt-4 text-stone-600">这个链接暂时不存在，可以回到首页或继续逛商品。</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link to="/" className={buttonStyles('primary', 'lg')}>
          返回首页
        </Link>
        <Link to="/products" className={buttonStyles('outline', 'lg')}>
          继续购物
        </Link>
      </div>
    </section>
  );
}
