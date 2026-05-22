import { Gift, Heart, Instagram, Mail, Palette, Sparkles, Star, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button, { buttonStyles } from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import ProductGrid from '../components/product/ProductGrid';
import { products } from '../data/products';
import { mockSubscribeEmail } from '../services/newsletter';
import { useState } from 'react';

const reviews = [
  ['颜色很舒服，不是廉价的花哨感，拍照也很好看。', 'Luna / 上海'],
  ['第一次坚持写完了一整个月手账，页面不会给我压力。', 'Momo / 杭州'],
  ['礼盒包装很完整，送朋友很合适。', 'Joy / 成都'],
];

export default function HomePage() {
  const featuredProducts = products.filter((product) => product.isFeatured).slice(0, 4);
  const bundle = products.find((product) => product.slug === 'starter-kit');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const subscribe = async () => {
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMessage('请填写正确的邮箱地址');
      return;
    }

    await mockSubscribeEmail(email);
    setMessage('订阅成功，下一封灵感邮件会准时到达。');
    setEmail('');
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-stone-200 bg-white/75 px-4 py-2 text-sm font-semibold text-stone-600 shadow-sm">
              <Sparkles className="mr-2 h-4 w-4" /> 新品上架：春日贴纸与柔彩手账本
            </div>
            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              把普通一天写成小小快乐。
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">
              dopafun 是面向年轻人的手账文具品牌，用柔和多巴胺色彩、原创图案和轻负担排版，让记录生活变得轻松、有趣、可持续。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/products" className={buttonStyles('primary', 'lg')}>
                立即逛新品
              </Link>
              <Link to="/about" className={buttonStyles('outline', 'lg')}>
                了解品牌故事
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-stone-600">
              <span className="flex items-center gap-2">
                <Truck className="h-4 w-4" /> 满 99 包邮
              </span>
              <span className="flex items-center gap-2">
                <Gift className="h-4 w-4" /> 支持礼盒搭配
              </span>
              <span className="flex items-center gap-2">
                <Heart className="h-4 w-4" /> 原创设计
              </span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/70 p-4 shadow-soft backdrop-blur">
            <div className="grid grid-cols-2 gap-4">
              {featuredProducts.map((product, index) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className={`rounded-[1.75rem] bg-gradient-to-br ${product.images[0].gradient} p-5 shadow-sm ${
                    index === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' : ''
                  }`}
                >
                  <div className="text-right text-xs font-bold uppercase tracking-wide text-stone-500">
                    {product.tag}
                  </div>
                  <div className="mt-4 grid aspect-square place-items-center rounded-[1.5rem] bg-white/55 text-5xl font-black shadow-inner">
                    {product.images[0].emoji}
                  </div>
                  <div className="mt-4 font-black">{product.name}</div>
                  <div className="text-sm text-stone-600">¥{product.price}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionTitle eyebrow="New mood" title="新品推荐" description="从一页计划到一枚贴纸，先选一个今天会用到的小东西。" />
          <Link to="/products" className={buttonStyles('outline', 'md')}>
            查看全部商品
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      {bundle ? (
        <section className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid overflow-hidden rounded-[2rem] bg-stone-900 text-white md:grid-cols-[1fr_0.9fr]">
            <div className="p-8 md:p-12">
              <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                爆款套装
              </div>
              <h2 className="text-4xl font-black leading-tight">{bundle.name}</h2>
              <p className="mt-5 max-w-2xl leading-8 text-stone-300">{bundle.description}</p>
              <Link to={`/products/${bundle.slug}`} className={buttonStyles('secondary', 'lg') + ' mt-8'}>
                查看套装详情
              </Link>
            </div>
            <div className={`min-h-[320px] bg-gradient-to-br ${bundle.images[0].gradient} p-8`}>
              <div className="grid h-full place-items-center rounded-[1.75rem] bg-white/60 text-center text-stone-900 shadow-soft">
                <div>
                  <Gift className="mx-auto mb-4 h-14 w-14" />
                  <div className="text-2xl font-black">开箱即开始</div>
                  <div className="mt-2 text-stone-600">手账本 / 贴纸 / 胶带 / 便签 / 彩色笔</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <SectionTitle
              eyebrow="Brand story"
              title="不是为了精致生活，而是把普通一天记下来。"
              description="dopafun 做的是轻负担手账：页面好写、配色好搭、价格友好。你可以从今天的一句备忘、一张票根、一个灵感开始。"
            />
            <Link to="/about" className={buttonStyles('primary', 'md')}>
              读完整故事
            </Link>
          </div>
          <div className="rounded-[2rem] bg-gradient-to-br from-pink-100 via-yellow-100 to-sky-100 p-6 shadow-soft">
            <div className="rounded-[1.75rem] bg-white/70 p-6">
              <Palette className="mb-4 h-10 w-10" />
              <div className="text-2xl font-black">soft dopamine palette</div>
              <div className="mt-5 flex gap-3">
                <span className="h-12 w-12 rounded-full bg-pink-200" />
                <span className="h-12 w-12 rounded-full bg-yellow-200" />
                <span className="h-12 w-12 rounded-full bg-sky-200" />
                <span className="h-12 w-12 rounded-full bg-lime-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <SectionTitle eyebrow="Reviews" title="用户评价" />
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map(([quote, name]) => (
            <article key={name} className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star key={item} className="h-4 w-4 fill-stone-900" />
                ))}
              </div>
              <p className="text-xl font-bold leading-8">“{quote}”</p>
              <p className="mt-6 text-sm text-stone-500">{name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-white via-pink-50 to-yellow-50 p-6 shadow-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                加入 dopafun club，获得每月手账灵感。
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-stone-600">
                订阅后会收到新品预告、配色模板、排版灵感和会员折扣。
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-white p-4 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="your@email.com"
                    className="h-12 w-full rounded-full border border-stone-200 pl-11 pr-4 text-sm outline-none focus:border-stone-900 focus:ring-4 focus:ring-yellow-100"
                  />
                </label>
                <Button onClick={subscribe}>订阅</Button>
              </div>
              {message ? <p className="mt-3 text-sm text-stone-600">{message}</p> : null}
              <div className="mt-4 flex items-center gap-2 text-sm text-stone-500">
                <Instagram className="h-4 w-4" /> @dopafun.stationery
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
