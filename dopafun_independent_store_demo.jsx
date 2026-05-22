import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, Heart, Star, Mail, Menu, Search, Gift, Palette, Truck, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const products = [
  {
    name: 'Daily Dopamine Planner',
    cn: '多巴胺日程手账本',
    price: '¥89',
    tag: 'Best Seller',
    desc: '一周一页排版，适合学习、工作、生活打卡。',
    emoji: '📒',
    gradient: 'from-pink-100 via-yellow-100 to-blue-100'
  },
  {
    name: 'Mood Sticker Pack',
    cn: '心情贴纸包',
    price: '¥39',
    tag: 'New',
    desc: '80枚原创贴纸，把小情绪贴进每一天。',
    emoji: '🌈',
    gradient: 'from-purple-100 via-pink-100 to-orange-100'
  },
  {
    name: 'Soft Color Washi Set',
    cn: '柔彩和纸胶带组',
    price: '¥59',
    tag: 'Gift Pick',
    desc: '6卷低饱和配色，适合拼贴、分区和装饰。',
    emoji: '🎀',
    gradient: 'from-rose-100 via-stone-100 to-emerald-100'
  },
  {
    name: 'Journal Starter Kit',
    cn: '手账入门礼盒',
    price: '¥169',
    tag: 'Bundle',
    desc: '手账本、贴纸、胶带、便签一次配齐。',
    emoji: '🎁',
    gradient: 'from-sky-100 via-lime-100 to-amber-100'
  }
];

const reviews = [
  ['“颜色很舒服，不是廉价的花哨感。”', 'Luna / 上海'],
  ['“第一次坚持写完了一整个月手账。”', 'Momo / 杭州'],
  ['“礼盒包装很好看，送朋友很合适。”', 'Joy / 成都']
];

export default function DopafunIndependentStoreDemo() {
  const [cart, setCart] = useState(0);
  const totalLabel = useMemo(() => cart === 0 ? '购物袋' : `购物袋 · ${cart}`, [cart]);

  return (
    <div className="min-h-screen bg-[#fffaf4] text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#fffaf4]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-900 text-lg text-white shadow-sm">d</div>
            <div>
              <div className="text-xl font-black tracking-tight">dopafun</div>
              <div className="text-xs text-stone-500">stationery for tiny happy moments</div>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium text-stone-600 md:flex">
            <a href="#products" className="hover:text-stone-950">新品</a>
            <a href="#story" className="hover:text-stone-950">品牌故事</a>
            <a href="#journal" className="hover:text-stone-950">手账灵感</a>
            <a href="#gift" className="hover:text-stone-950">礼盒</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full"><Search className="h-5 w-5" /></Button>
            <Button className="hidden rounded-full bg-stone-900 px-5 hover:bg-stone-700 sm:flex">
              <ShoppingBag className="mr-2 h-4 w-4" />{totalLabel}
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full md:hidden"><Menu className="h-5 w-5" /></Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute left-[-6rem] top-16 h-72 w-72 rounded-full bg-pink-200/60 blur-3xl" />
          <div className="absolute right-[-4rem] top-40 h-80 w-80 rounded-full bg-yellow-200/70 blur-3xl" />
          <div className="absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-sky-200/60 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-5 inline-flex items-center rounded-full border border-stone-200 bg-white/70 px-4 py-2 text-sm text-stone-600 shadow-sm">
                <Sparkles className="mr-2 h-4 w-4" /> 新品上架：春日贴纸与柔彩胶带
              </div>
              <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                Write down your <span className="rounded-3xl bg-yellow-200 px-3">tiny joy</span>.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">
                dopafun 是一个面向年轻人的手账文具品牌，用柔和色彩、原创插画和实用排版，让记录生活这件事变得轻松、有趣、可持续。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-full bg-stone-900 px-8 py-6 text-base hover:bg-stone-700">立即逛新品</Button>
                <Button variant="outline" className="rounded-full border-stone-300 bg-white/70 px-8 py-6 text-base">查看手账灵感</Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-stone-600">
                <span className="flex items-center gap-2"><Truck className="h-4 w-4" /> 满 ¥199 包邮</span>
                <span className="flex items-center gap-2"><Gift className="h-4 w-4" /> 支持礼盒包装</span>
                <span className="flex items-center gap-2"><Heart className="h-4 w-4" /> 原创设计</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
              <div className="rounded-[2rem] border border-white/70 bg-white/65 p-4 shadow-2xl backdrop-blur">
                <div className="grid grid-cols-2 gap-4">
                  {products.map((item, index) => (
                    <div key={item.name} className={`rounded-[1.75rem] bg-gradient-to-br ${item.gradient} p-5 shadow-sm ${index === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' : ''}`}>
                      <div className="text-right text-xs font-bold uppercase tracking-wide text-stone-500">{item.tag}</div>
                      <div className="mt-4 flex aspect-square items-center justify-center rounded-[1.5rem] bg-white/50 text-6xl shadow-inner">{item.emoji}</div>
                      <div className="mt-4 font-bold">{item.cn}</div>
                      <div className="text-sm text-stone-600">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-5 -left-4 rounded-3xl bg-stone-900 px-5 py-4 text-white shadow-xl">
                <div className="text-xs text-stone-300">本月主题</div>
                <div className="font-bold">低饱和多巴胺色系</div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-stone-400">Shop the mood</p>
              <h2 className="text-4xl font-black tracking-tight">精选手账单品</h2>
            </div>
            <Button variant="outline" className="w-fit rounded-full bg-white px-6">查看全部商品</Button>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {products.map((item) => (
              <Card key={item.name} className="overflow-hidden rounded-[1.75rem] border-stone-200 bg-white/85 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-4">
                  <div className={`flex aspect-square items-center justify-center rounded-[1.5rem] bg-gradient-to-br ${item.gradient} text-7xl`}>
                    {item.emoji}
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-black">{item.cn}</h3>
                      <p className="text-sm text-stone-500">{item.name}</p>
                    </div>
                    <span className="rounded-full bg-stone-100 px-3 py-1 text-sm font-bold">{item.price}</span>
                  </div>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-stone-600">{item.desc}</p>
                  <Button onClick={() => setCart((v) => v + 1)} className="mt-4 w-full rounded-full bg-stone-900 hover:bg-stone-700">加入购物袋</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="story" className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid overflow-hidden rounded-[2rem] bg-stone-900 text-white md:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm">Brand Story</div>
              <h2 className="text-4xl font-black leading-tight">不是为了“精致生活”，而是为了把普通一天记下来。</h2>
              <p className="mt-5 leading-8 text-stone-300">
                dopafun 希望做的是“轻负担手账”：页面好写、配色好搭、价格友好。无论你是学生、上班族，还是刚开始尝试记录生活的人，都能从一页纸开始获得一点点秩序感和快乐。
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-3xl bg-white/10 p-4"><div className="text-2xl font-black">100%</div><div className="text-xs text-stone-300">原创视觉</div></div>
                <div className="rounded-3xl bg-white/10 p-4"><div className="text-2xl font-black">4.9</div><div className="text-xs text-stone-300">用户评分</div></div>
                <div className="rounded-3xl bg-white/10 p-4"><div className="text-2xl font-black">24h</div><div className="text-xs text-stone-300">快速发货</div></div>
              </div>
            </div>
            <div className="relative min-h-[360px] bg-gradient-to-br from-pink-200 via-yellow-100 to-sky-200 p-8">
              <div className="absolute left-10 top-10 rotate-[-7deg] rounded-3xl bg-white p-5 shadow-xl">
                <div className="mb-3 flex gap-1">{[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-stone-900" />)}</div>
                <p className="max-w-xs text-stone-700">今天也要记录一点点开心。</p>
              </div>
              <div className="absolute bottom-12 right-8 rotate-[6deg] rounded-3xl bg-white p-6 shadow-xl">
                <Palette className="mb-3 h-8 w-8" />
                <div className="font-black text-stone-900">soft dopamine palette</div>
                <div className="mt-3 flex gap-2">
                  <span className="h-8 w-8 rounded-full bg-pink-200" />
                  <span className="h-8 w-8 rounded-full bg-yellow-200" />
                  <span className="h-8 w-8 rounded-full bg-sky-200" />
                  <span className="h-8 w-8 rounded-full bg-lime-200" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="journal" className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map(([quote, name]) => (
              <Card key={name} className="rounded-[1.75rem] border-stone-200 bg-white shadow-sm">
                <CardContent className="p-7">
                  <div className="mb-4 flex gap-1">{[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-stone-900" />)}</div>
                  <p className="text-xl font-bold leading-8">{quote}</p>
                  <p className="mt-6 text-sm text-stone-500">{name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="gift" className="mx-auto max-w-7xl px-5 pb-20">
          <div className="rounded-[2rem] bg-gradient-to-br from-white via-pink-50 to-yellow-50 p-8 shadow-sm md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <h2 className="text-4xl font-black tracking-tight">加入 dopafun club，获得每月手账灵感。</h2>
                <p className="mt-4 max-w-2xl leading-8 text-stone-600">订阅邮件后，你会收到新品预告、配色模板、手账排版教程和会员专属折扣。适合做独立站的私域沉淀入口。</p>
              </div>
              <div className="rounded-[1.5rem] bg-white p-4 shadow-sm">
                <div className="flex gap-3">
                  <div className="flex flex-1 items-center rounded-full border border-stone-200 px-4 text-sm text-stone-400">
                    <Mail className="mr-2 h-4 w-4" /> your@email.com
                  </div>
                  <Button className="rounded-full bg-stone-900 px-6 hover:bg-stone-700">订阅</Button>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-stone-500"><Instagram className="h-4 w-4" /> @dopafun.stationery</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-8 text-sm text-stone-500 md:flex-row">
          <div>© 2026 dopafun. made for tiny happy moments.</div>
          <div className="flex gap-5"><span>About</span><span>Shipping</span><span>Returns</span><span>Contact</span></div>
        </div>
      </footer>
    </div>
  );
}
