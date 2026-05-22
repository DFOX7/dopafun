export type ProductTag = '新品' | '热卖' | '高复购' | '套装';

export type ProductImage = {
  gradient: string;
  accent: string;
  emoji: string;
  label: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tag: ProductTag;
  shortDescription: string;
  description: string;
  features: string[];
  specs: string[];
  images: ProductImage[];
  inventory: number;
  isFeatured: boolean;
  isNew: boolean;
};

export const products: Product[] = [
  {
    id: 'p-mood-grid',
    slug: 'mood-grid-journal',
    name: 'Mood Grid 手账本',
    category: '手账本',
    price: 68,
    originalPrice: 79,
    tag: '新品',
    shortDescription: '一页记录心情、计划和小确幸，适合日常打卡。',
    description:
      'Mood Grid 手账本用清爽网格和柔彩分区帮助你快速开始记录。页面不复杂，适合学习计划、情绪追踪、灵感摘抄和生活复盘。',
    features: ['180 度平摊书写', '低饱和多巴胺四色分区', '月计划、周计划、自由笔记组合'],
    specs: ['A5 尺寸', '128 页', '100g 道林纸', '裸脊锁线装订'],
    images: [
      {
        gradient: 'from-pink-100 via-yellow-100 to-sky-100',
        accent: 'bg-pink-200',
        emoji: '□',
        label: 'Mood Grid',
      },
    ],
    inventory: 42,
    isFeatured: true,
    isNew: true,
  },
  {
    id: 'p-dopa-sticker',
    slug: 'dopa-sticker-pack',
    name: 'Dopa Sticker Pack 多巴胺贴纸包',
    category: '贴纸',
    price: 36,
    tag: '热卖',
    shortDescription: '80 枚原创小图案，把普通一天贴得更有记忆点。',
    description:
      'Dopa Sticker Pack 包含心情、天气、待办、灵感和奖励贴纸，适合装饰手账、便签、电脑壳和礼物包装。',
    features: ['80 枚异形贴纸', '哑光防水表面', '原创图标和手写字标'],
    specs: ['10 张入', '单张 8cm x 12cm', 'PET 哑光材质'],
    images: [
      {
        gradient: 'from-fuchsia-100 via-rose-100 to-orange-100',
        accent: 'bg-fuchsia-200',
        emoji: '*',
        label: 'Sticker Pack',
      },
    ],
    inventory: 120,
    isFeatured: true,
    isNew: false,
  },
  {
    id: 'p-candy-tabs',
    slug: 'candy-tabs',
    name: 'Candy Tabs 糖果索引贴',
    category: '索引贴',
    price: 22,
    tag: '高复购',
    shortDescription: '半透明糖果色索引贴，让资料和手账都更好找。',
    description:
      'Candy Tabs 适合给课程、工作资料、读书笔记做章节标记。颜色轻快但不刺眼，写字清晰，撕贴顺手。',
    features: ['半透明可书写', '六色糖果配色', '可反复撕贴不易残胶'],
    specs: ['6 色 x 30 枚', '总计 180 枚', 'PP 半透明材质'],
    images: [
      {
        gradient: 'from-lime-100 via-amber-100 to-pink-100',
        accent: 'bg-lime-200',
        emoji: '▤',
        label: 'Candy Tabs',
      },
    ],
    inventory: 90,
    isFeatured: false,
    isNew: true,
  },
  {
    id: 'p-fun-ink',
    slug: 'fun-ink-pens',
    name: 'Fun Ink 彩色中性笔套装',
    category: '笔',
    price: 49,
    originalPrice: 59,
    tag: '热卖',
    shortDescription: '顺滑速干的彩色中性笔，适合标题、重点和小插画。',
    description:
      'Fun Ink 套装精选 8 支日常高频色，颜色清亮，出墨稳定。用于手账标题、错题标注、便签留言都很好搭。',
    features: ['0.5mm 顺滑笔尖', '速干墨水', '8 支柔彩常用色'],
    specs: ['8 支装', '0.5mm', '水性颜料墨水', '透明笔杆'],
    images: [
      {
        gradient: 'from-sky-100 via-violet-100 to-pink-100',
        accent: 'bg-sky-200',
        emoji: '|||',
        label: 'Fun Ink',
      },
    ],
    inventory: 65,
    isFeatured: true,
    isNew: false,
  },
  {
    id: 'p-weekly-reset',
    slug: 'weekly-reset-planner',
    name: 'Weekly Reset 周计划本',
    category: '手账本',
    price: 58,
    tag: '新品',
    shortDescription: '把一周待办、习惯和情绪放在同一页管理。',
    description:
      'Weekly Reset 周计划本适合想轻松规划一周的人。固定布局降低空白页压力，保留足够自由区写下临时想法。',
    features: ['周目标、待办、习惯追踪一体', '轻量装帧方便携带', '每周一页快速复盘'],
    specs: ['B6 尺寸', '96 页', '米白内页', '胶装'],
    images: [
      {
        gradient: 'from-emerald-100 via-cyan-100 to-yellow-100',
        accent: 'bg-emerald-200',
        emoji: '✓',
        label: 'Weekly Reset',
      },
    ],
    inventory: 38,
    isFeatured: false,
    isNew: true,
  },
  {
    id: 'p-tiny-joy',
    slug: 'tiny-joy-sticky-notes',
    name: 'Tiny Joy 便签纸',
    category: '便签',
    price: 26,
    tag: '高复购',
    shortDescription: '小尺寸便签纸，用来记录突然冒出来的快乐和灵感。',
    description:
      'Tiny Joy 便签纸包含四种形状和柔彩底色，适合夹在书里、贴在电脑旁、写购物清单和给朋友留言。',
    features: ['四种形状组合', '粘性稳定', '浅色底不影响书写'],
    specs: ['4 本入', '每本 50 张', '80g 书写纸'],
    images: [
      {
        gradient: 'from-yellow-100 via-orange-100 to-rose-100',
        accent: 'bg-yellow-200',
        emoji: '+',
        label: 'Tiny Joy',
      },
    ],
    inventory: 100,
    isFeatured: true,
    isNew: false,
  },
  {
    id: 'p-dream-log',
    slug: 'dream-log-notebook',
    name: 'Dream Log 灵感收集本',
    category: '手账本',
    price: 72,
    tag: '新品',
    shortDescription: '给灵感、梦境、片段式想法准备的自由记录本。',
    description:
      'Dream Log 灵感收集本采用点阵内页和可撕灵感卡，适合创作者、学生和喜欢记录碎片想法的人。',
    features: ['点阵内页自由排版', '附赠灵感卡', '封面触感膜工艺'],
    specs: ['A5 尺寸', '144 页', '120g 点阵纸', '附 12 张灵感卡'],
    images: [
      {
        gradient: 'from-indigo-100 via-purple-100 to-pink-100',
        accent: 'bg-indigo-200',
        emoji: '◇',
        label: 'Dream Log',
      },
    ],
    inventory: 31,
    isFeatured: false,
    isNew: true,
  },
  {
    id: 'p-starter-kit',
    slug: 'starter-kit',
    name: 'Starter Kit 新手手账套装',
    category: '套装',
    price: 168,
    originalPrice: 198,
    tag: '套装',
    shortDescription: '手账本、贴纸、胶带、便签和笔一次配齐。',
    description:
      'Starter Kit 是给手账新手的完整入门组合，也适合送礼。配色已经搭好，打开就能开始写第一周。',
    features: ['5 件核心文具组合', '礼盒包装', '附新手排版小卡'],
    specs: ['Mood Grid 手账本 x 1', '贴纸包 x 1', '胶带 x 2', '便签 x 1', '彩色笔 x 3'],
    images: [
      {
        gradient: 'from-pink-100 via-lime-100 to-cyan-100',
        accent: 'bg-rose-200',
        emoji: '◎',
        label: 'Starter Kit',
      },
    ],
    inventory: 24,
    isFeatured: true,
    isNew: false,
  },
];

export const categories = ['全部', ...Array.from(new Set(products.map((product) => product.category)))];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
