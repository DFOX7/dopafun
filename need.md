你现在是一个资深全栈前端工程师，请基于我当前 VSCode 工作区中的代码，帮我生成一个完整可运行的 dopafun 手账文具品牌独立站 MVP。

背景：
我正在做一个名为 dopafun 的手账文具品牌独立站。品牌调性是年轻、轻快、多巴胺配色、高颜值、适合小红书/Instagram/TikTok 种草。当前我已经有一个 React JSX 首页 demo，但它只是视觉原型，不是完整独立站。请你把它扩展成一个可运行、可维护、可继续开发的完整项目。

重要要求：

1. 请先检查当前项目结构，不要盲目覆盖全部文件。
2. 如果当前是 Vite + React 项目，就在现有项目上补齐功能。
3. 如果缺少 Tailwind、路由、组件、数据文件等，请自动补齐。
4. 如果当前项目无法正常运行，请修复到 npm install 和 npm run dev 可以启动。
5. 不要只生成静态页面，要做成一个完整的独立站 MVP。
6. 所有代码要尽量简单、清晰、可维护，不要过度工程化。
7. 默认使用 React + Vite + TypeScript + Tailwind CSS。
8. 如果当前项目还是 JavaScript，也可以逐步迁移为 TypeScript；但不要让项目复杂到难以运行。
9. 不要接入真实支付，不要需要真实后端密钥。请先实现“模拟结算流程”，并预留 Stripe / Shopify 的接口位置。
10. 所有页面和文案使用中文，品牌名使用 dopafun。

项目目标：
生成一个完整可用的 dopafun 独立站前端程序，至少包含以下页面和功能：

一、页面结构
请实现以下页面：

1. 首页 /

   - 顶部导航栏
   - 品牌首屏 Banner
   - 新品推荐
   - 爆款套装推荐
   - 品牌故事
   - 用户评价
   - 邮件订阅区
   - 页脚
2. 商品列表页 /products

   - 商品网格
   - 分类筛选
   - 关键词搜索
   - 排序功能：默认、价格从低到高、价格从高到低
   - 商品标签：新品、热卖、高复购、套装
   - 空状态提示
3. 商品详情页 /products/:slug

   - 商品图片占位展示
   - 商品名称、价格、标签、描述
   - 材质/规格/适用场景
   - 数量选择
   - 加入购物车
   - 推荐搭配商品
4. 购物车页 /cart

   - 展示购物车商品
   - 修改数量
   - 删除商品
   - 计算小计、运费、总价
   - 满 99 包邮
   - 去结算按钮
5. 模拟结算页 /checkout

   - 联系人信息
   - 收货地址
   - 配送方式
   - 订单摘要
   - 提交订单按钮
   - 表单校验
   - 提交后跳转到订单成功页
6. 订单成功页 /success

   - 显示模拟订单号
   - 显示订单金额
   - 提示用户订单已创建
   - 返回首页 / 继续购物按钮
7. 品牌故事页 /about

   - dopafun 的品牌定位
   - 为什么做手账文具
   - 品牌关键词：记录快乐、灵感收集、轻松计划、多巴胺配色
8. 联系我们页 /contact

   - 联系表单：姓名、邮箱、留言
   - 表单校验
   - 提交后给出成功提示即可，不需要真实发送

二、商品数据
请创建一个本地数据文件，例如：

src/data/products.ts

至少包含 8 个商品，商品要符合手账文具品牌定位。示例类型包括：

1. Mood Grid 手账本
2. Dopa Sticker Pack 多巴胺贴纸包
3. Candy Tabs 糖果索引贴
4. Fun Ink 彩色中性笔套装
5. Weekly Reset 周计划本
6. Tiny Joy 便签纸
7. Dream Log 灵感收集本
8. Starter Kit 新手手账套装

每个商品至少包含：

- id
- slug
- name
- category
- price
- originalPrice，可选
- tag
- shortDescription
- description
- features
- specs
- images，可以先用渐变色占位，不需要真实图片
- inventory
- isFeatured
- isNew

三、购物车功能
请实现一个完整的前端购物车：

1. 使用 React Context 或 Zustand 管理购物车状态。
2. 购物车数据持久化到 localStorage。
3. 支持加入购物车。
4. 支持修改数量。
5. 支持删除商品。
6. 支持清空购物车。
7. 支持计算商品小计。
8. 支持满 99 包邮，否则运费 8 元。
9. 支持计算订单总价。
10. 页面刷新后购物车不丢失。

四、路由
请使用 react-router-dom 实现路由：

/
/products
/products/:slug
/cart
/checkout
/success
/about
/contact

五、UI 和风格要求
请沿用当前 demo 的视觉方向：

- 多巴胺风格
- 柔和渐变
- 大圆角
- 卡片式设计
- 年轻、轻快、干净
- 适合手账文具品牌
- 字体可以使用系统默认字体，不要依赖外部字体文件
- 移动端和桌面端都要适配
- 页面不能出现明显错位
- 商品卡片要整齐
- 按钮、输入框、导航栏、页脚要统一风格

六、组件拆分
请合理拆分组件，建议包括但不限于：

src/components/layout/Header.tsx
src/components/layout/Footer.tsx
src/components/product/ProductCard.tsx
src/components/product/ProductGrid.tsx
src/components/product/ProductFilters.tsx
src/components/cart/CartItem.tsx
src/components/common/Button.tsx
src/components/common/Input.tsx
src/components/common/SectionTitle.tsx
src/components/common/GradientProductImage.tsx

不要为了炫技拆得太碎，保持清晰即可。

七、状态和工具函数
请创建：

src/context/CartContext.tsx
src/hooks/useCart.ts，如果需要
src/utils/format.ts
src/utils/order.ts

format.ts 里提供：

- formatCurrency，用于显示人民币价格，例如 ¥68.00

order.ts 里提供：

- generateOrderNumber，用于生成模拟订单号，例如 DOPA202605220001

八、表单校验
请实现基础表单校验，不必引入复杂库。

结算页至少校验：

- 姓名不能为空
- 手机号不能为空
- 邮箱格式正确
- 地址不能为空
- 城市不能为空

联系页至少校验：

- 姓名不能为空
- 邮箱格式正确
- 留言不能为空

九、预留真实上线接口
请在代码中清晰预留以下位置，但不要强行实现真实接口：

1. Stripe 支付接口预留

   - 可以创建 src/services/payment.ts
   - 暂时实现 mockCreateCheckoutSession
   - 注释说明未来可以替换为 Stripe Checkout
2. 邮件订阅接口预留

   - 可以创建 src/services/newsletter.ts
   - 暂时实现 mockSubscribeEmail
3. 订单提交接口预留

   - 可以创建 src/services/order.ts
   - 暂时实现 mockCreateOrder

十、README 文档
请生成或更新 README.md，内容包括：

1. 项目介绍
2. 技术栈
3. 如何安装
4. 如何本地运行
5. 项目目录结构
6. 当前已实现功能
7. 后续上线需要接入的内容
   - 真实商品后台
   - 真实支付系统，例如 Stripe / PayPal
   - 真实订单数据库
   - 物流系统
   - 邮件营销工具
   - 域名和部署
8. 常见问题
   - npm install 失败怎么办
   - Tailwind 没生效怎么办
   - 页面空白怎么办

十一、代码质量要求

1. 所有 TypeScript 类型尽量明确。
2. 不要出现 any 滥用。
3. 不要出现明显重复代码。
4. 不要出现未使用变量。
5. 不要出现控制台报错。
6. npm run dev 必须可以正常启动。
7. npm run build 必须尽量通过。
8. 所有链接都要可点击。
9. 购物车和结算流程要能完整走通。
10. UI 要比普通模板更像一个真实品牌网站。

十二、请你按以下步骤工作
第一步：检查当前项目结构和 package.json。
第二步：判断当前项目缺少哪些依赖和配置。
第三步：补齐依赖建议。
第四步：创建或修改必要文件。
第五步：实现页面、组件、数据、购物车、结算流程。
第六步：修复所有编译错误。
第七步：给出最终运行命令。
第八步：告诉我你改了哪些文件，以及后续我可以怎么继续扩展。

十三、依赖建议
如果缺少依赖，请使用这些：

- react
- react-dom
- react-router-dom
- lucide-react
- framer-motion，可选
- tailwindcss
- postcss
- autoprefixer
- vite
- typescript

如果当前项目里已经有 shadcn/ui，可以继续使用。
如果没有 shadcn/ui，不要强制安装，可以自己写 Button、Card、Input 组件，避免配置复杂导致项目跑不起来。

十四、最终验收标准
完成后，我应该可以执行：

npm install
npm run dev

然后在浏览器中看到完整 dopafun 独立站，并且可以完成：

首页浏览
进入商品列表
筛选商品
进入商品详情
加入购物车
修改购物车数量
进入结算页
填写模拟收货信息
提交订单
进入订单成功页

请开始实现。
