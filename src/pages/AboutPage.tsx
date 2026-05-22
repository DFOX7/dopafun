import { Heart, Lightbulb, Palette, Sparkles } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';

const values = [
  { icon: Heart, title: '记录快乐', text: '不用等到大事发生，也能把今天的小亮点留下来。' },
  { icon: Lightbulb, title: '灵感收集', text: '给突然出现的想法、句子、颜色和画面一个落点。' },
  { icon: Sparkles, title: '轻松计划', text: '减少复杂模板，把计划做得更轻、更容易坚持。' },
  { icon: Palette, title: '多巴胺配色', text: '柔和、清爽、适合拍照，也适合每天真实使用。' },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div>
          <SectionTitle
            eyebrow="About dopafun"
            title="我们做手账文具，是因为记录本身就能让生活变轻一点。"
            description="dopafun 的定位是年轻、轻快、高颜值、适合分享的手账文具品牌。我们相信文具不只是工具，也是一种把注意力带回日常的小仪式。"
          />
        </div>
        <div className="rounded-[2rem] bg-gradient-to-br from-pink-100 via-yellow-100 to-sky-100 p-6 shadow-soft">
          <div className="rounded-[1.75rem] bg-white/75 p-8">
            <h2 className="text-3xl font-black">stationery for tiny happy moments</h2>
            <p className="mt-4 leading-8 text-stone-600">
              我们希望每一件 dopafun 文具都容易上手、颜色好搭、价格友好。它可以是学习计划的开始，也可以是睡前复盘时的一点陪伴。
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-4">
        {values.map((item) => (
          <article key={item.title} className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
            <item.icon className="h-8 w-8" />
            <h3 className="mt-4 text-xl font-black">{item.title}</h3>
            <p className="mt-3 leading-7 text-stone-600">{item.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-[2rem] bg-stone-900 p-8 text-white md:p-12">
        <h2 className="text-3xl font-black">为什么从手账文具开始</h2>
        <p className="mt-5 max-w-3xl leading-8 text-stone-300">
          因为手账不需要宏大的目标。它可以是今天喝到的一杯好喝饮料，可以是读书时划下的一句话，也可以是一张贴纸带来的好心情。dopafun 想把这种小小的正反馈做成日常可触摸的产品。
        </p>
      </div>
    </section>
  );
}
