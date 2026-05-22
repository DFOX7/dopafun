# dopafun 手账文具独立站 MVP

dopafun 是一个年轻、轻快、高颜值的手账文具品牌独立站 MVP。当前项目实现了商品浏览、筛选搜索、商品详情、购物车、模拟结算、订单成功页、品牌故事页、联系表单和邮件订阅入口。

## 技术栈

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- lucide-react

## 安装

```bash
npm install
```

## 本地运行

```bash
npm run dev
```

构建生产版本：

```bash
npm run build
```

## 部署到 GitHub Pages

项目已包含 GitHub Actions 部署配置：`.github/workflows/deploy.yml`。

首次部署步骤：

1. 在 GitHub 新建一个仓库，例如 `dopafun`
2. 把本地项目推送到仓库的 `main` 分支
3. 打开仓库的 `Settings` → `Pages`
4. 在 `Build and deployment` 里选择 `GitHub Actions`
5. 等待 Actions 跑完后，在 `Pages` 页面查看公开访问地址

Vite 已配置 `base: './'`，路由使用 `HashRouter`，适合部署到 GitHub Pages 的子路径地址。

## 项目目录

```text
src/
  components/
    cart/
    common/
    layout/
    product/
  context/
  data/
  hooks/
  pages/
  services/
  utils/
```

## 已实现功能

- 首页 Banner、新品推荐、爆款套装、品牌故事、用户评价、邮件订阅和页脚
- 商品列表页，支持分类筛选、关键词搜索、价格排序和空状态
- 商品详情页，支持数量选择、加入购物车和推荐搭配
- 前端购物车，支持 localStorage 持久化、修改数量、删除、清空、满 99 包邮和总价计算
- 模拟结算页，支持基础表单校验和订单提交
- 订单成功页，展示模拟订单号和订单金额
- 品牌故事页和联系表单页
- 预留支付、邮件订阅、订单提交服务层

## 后续上线需要接入

- 真实商品后台和库存管理
- 真实支付系统，例如 Stripe、PayPal 或 Shopify Checkout
- 真实订单数据库
- 物流系统和发货状态同步
- 邮件营销工具，例如 Mailchimp、Klaviyo 或 ConvertKit
- 域名、部署、CDN、监控和数据分析

## 常见问题

### npm install 失败怎么办

先确认 Node.js 版本建议为 18 或更高，并检查网络或 npm 镜像源。可以尝试：

```bash
npm cache clean --force
npm install
```

### Tailwind 没生效怎么办

确认 `src/index.css` 已包含 Tailwind 指令，`tailwind.config.js` 的 `content` 包含 `./src/**/*.{ts,tsx}`，并重新启动开发服务。

### 页面空白怎么办

先查看终端和浏览器控制台报错。常见原因是依赖没有安装、开发服务没有重启，或路由路径手动输入错误。可重新执行：

```bash
npm install
npm run dev
```
