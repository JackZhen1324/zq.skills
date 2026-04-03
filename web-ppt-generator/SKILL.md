# Web PPT Generator

> 使用 React + TypeScript 创建专业级 Web PPT，支持放映模式和键盘翻页

## 触发条件

当用户表达以下意图时触发此 skill：

- "创建/制作/生成 PPT"
- "做一个汇报 PPT"
- "用 Web 技术做 PPT"
- "生成幻灯片"
- "做一个演示文稿"
- 提到 "PPT" + "汇报/演示/幻灯片"

## 技术栈

```json
{
  "framework": "React 18 + TypeScript",
  "styling": "SCSS Modules",
  "charts": "ECharts 5.x (可选)",
  "router": "React Router 6 (可选)"
}
```

## 必需信息收集

在开始生成前，必须收集以下信息：

### 必需信息

| 信息项 | 问题示例 | 用途 |
|--------|----------|------|
| PPT 主题 | "这份 PPT 的主题是什么？" | 确定内容方向 |
| 页数规划 | "计划多少页？推荐 5-10 页" | 规划结构 |
| 板块划分 | "分几个大板块？" | 组织内容 |
| 数据来源 | "数据在哪个文档？Excel/腾讯文档？" | 获取数据 |

### 可选信息

| 信息项 | 默认值 | 问题示例 |
|--------|--------|----------|
| 主题色 | `#C00000` 电信红 | "需要调整主题色吗？" |
| Logo 图片 | 使用默认 Logo | "Logo 图片路径？" |
| 背景图片 | 使用默认背景 | "需要自定义背景图吗？" |
| 汇报时长 | 不限制 | "汇报时长？" |

---

## 设计规范

### 颜色系统

```css
:root {
  /* 主题色 */
  --color-primary: #C00000;
  --color-primary-dark: #9A0000;
  --color-primary-light: #FFE5E5;
  
  /* 辅助色 */
  --color-secondary: #003D7A;
  --color-secondary-light: #4A90E2;
  
  /* 功能色 */
  --color-success: #00B050;
  --color-warning: #FFA500;
  --color-danger: #FF0000;
  
  /* 文字色 */
  --text-primary: #272525;
  --text-secondary: #666666;
  --text-muted: #999999;
  --text-inverse: #FFFFFF;
  
  /* 背景色 */
  --bg-page: #F5F5F5;
  --bg-card: #FFFFFF;
  --bg-table-odd: #CFD5EA;
  --bg-table-even: #E9EBF5;
  --bg-hover: #E6F2FF;
  
  /* 边框色 */
  --border-default: #E6F2FF;
  --border-highlight: #C00000;
  
  /* 阴影 */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.1);
  --shadow-glow: 0 4px 12px rgba(192, 0, 0, 0.15);
  
  /* 圆角 */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
}
```

### 字号体系

| 层级 | 字号 | 字重 | 颜色 | 用途 |
|------|------|------|------|------|
| H1 | 64px | 700 | 主题色 | 封面主标题 |
| H2 | 32px | 600 | 主题色 | 章节标题 |
| H3 | 24px | 600 | 主色 | 页面标题 |
| Body | 16px | 400 | 主色 | 正文 |
| Caption | 12px | 400 | 次色 | 说明文字 |
| Table Header | 14px | 600 | 白色 | 表格表头 |

### 页面尺寸

- **宽高比**：16:9
- **设计稿**：1920 x 1080 px
- **约束**：每页必须无滚动条

```scss
.slide {
  width: 100vw;
  height: 100vh;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
```

---

## 页面结构

### 三层结构

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER 区域                                                │
│  ├── 左侧：编号(灰色56px) + 标题(主题色32px加粗)              │
│  └── 右侧：（不显示 Logo，Logo 仅在放映模式右上角浮动显示）      │
├─────────────────────────────────────────────────────────────┤
│  分割线图片（10px 高，指定图片横向拉伸填充）                     │
├─────────────────────────────────────────────────────────────┤
│  CONTENT 区域 (flex: 1, 无滚动)                              │
│  ├── ┌─ 标题（主题色底色+白色加粗，浮在上边框居中）────────┐   │
│  ├── │ ┌ ─ ─ ─ ─ ─ ─ 虚线边框 ─ ─ ─ ─ ─ ─ ┐           │   │
│  ├── │  内容                                     │   │
│  ├── │ └ ─ ─ ─ ─ ─ ─ 虚线边框 ─ ─ ─ ─ ─ ─ ┘           │   │
│  └── └──────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│  FOOTER 区域 (可选)                                          │
│  └── 小结框 (红色边框)                                       │
└─────────────────────────────────────────────────────────────┘
```

### Header 规范
- **Logo 位置**：不在 Header 右侧显示，仅在**放映模式**下于右上角浮动显示
- **放映模式 Logo**：`position: fixed; top: 10px; right: 32px`，图片高度约 48-52px，通过 `height + align-items: center` 垂直居中
- **分割线**：高度 10px，使用指定图片（`object-fit: fill` 横向拉伸），与 Header 之间使用负 margin（如 `margin-top: -8px`）收紧间距
- **导航栏**：`border-bottom: 6px solid var(--color-primary)`

### 封面页规范
- **不显示 Logo**
- **底部不显示 MetricCard**，改为显示部门名称 + 日期
- **使用背景图**（`background-size: cover; background-position: center`）
- **标题颜色**：使用主题色 `var(--color-primary)`，不使用文字阴影
- **内容垂直居中**：`justify-content: center`

---

## 内容块类型

### 1. 数据表格

```tsx
// 样式规范
- 表头: 红色背景 #C00000, 白色文字, 加粗, 居中
- 斑马纹: 奇数行 #CFD5EA, 偶数行 #E9EBF5
- 高亮: 成功(绿) / 警告(黄) / 危险(红)
- 悬停: 背景 #E6F2FF
```

### 2. 指标卡片组

```
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│  💰      │ │  📁      │ │  📊      │ │  📈      │
│  总投入   │ │  项目数  │ │  进度    │ │  复用率  │
│  1500万  │ │  156个   │ │  85%     │ │  72%     │
│  ↑15%    │ │  ↑12%    │ │  正常    │ │  达标    │
└──────────┘ └──────────┘ └──────────┘ └──────────┘
```

### 3. 纯文本块（ContentBlock）

- **边框**：`2px dashed var(--border-highlight)` 虚线边框（主题色）
- **标题样式**：
  - 浮动在上边框居中：`position: absolute; top: -12px; left: 50%; transform: translateX(-50%)`
  - 主题色底色：`background: var(--color-primary)`
  - 白色文本：`color: var(--text-inverse)`
  - 加粗：`font-weight: 700; font-size: 14px`
  - 外边距：`padding: 3px 14px; border-radius: 4px; white-space: nowrap`
- **不使用 icon**：标题只显示文字，不加 icon
- 容器需要 `padding-top: 28px` 避免标题遮挡内容，且 `position: relative`
- 正文: 14-16px 主色

### 4. 列表内容

- 项目符号: 主题色 `●`
- 支持图标: `✅` `⚠️` `⏳`

### 5. 图表容器

- 统一圆角边框 8px
- 标题 14px 主题色
- 支持悬停详情

### 6. 对比块

- 双栏布局
- 边框颜色区分状态

---

## 放映模式功能

### Logo 显示规则
- **编辑模式**：Header 右侧不显示 Logo
- **放映模式**：右上角浮动显示 Logo（`position: fixed; top: 10px; right: 32px; height: ~52px`）
- Logo 需要垂直居中：容器 `height: 58px; display: flex; align-items: center`

### 操作提示框
- 进入放映模式后显示操作提示（右下角）
- **3 秒后自动消失**（使用 `setTimeout` + `showHint` state）
- 退出放映时立即隐藏

### 键盘交互

| 按键 | 功能 |
|------|------|
| `Space` 空格 | 下一页 |
| `→` 右箭头 | 下一页 |
| `←` 左箭头 | 上一页 |
| `Home` | 首页 |
| `End` | 末页 |
| `ESC` | 退出放映 |
| `F11` | 全屏切换 |

### 鼠标交互

- **左键单击**: 下一页 (放映模式)
- **右键单击**: 上一页 (放映模式)

---

## 项目结构

```
ppt-project/
├── public/
│   ├── logo.png           # Header Logo
│   ├── divider.jpeg       # 分割线图片
│   └── background.jpeg    # 背景图片
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SlideContainer.tsx
│   │   │   ├── SlideHeader.tsx
│   │   │   ├── SlideDivider.tsx
│   │   │   └── SlideFooter.tsx
│   │   ├── content/
│   │   │   ├── DataTable.tsx
│   │   │   ├── MetricCard.tsx
│   │   │   ├── TextBlock.tsx
│   │   │   ├── ListBlock.tsx
│   │   │   ├── ChartContainer.tsx
│   │   │   └── ComparisonBlock.tsx
│   │   └── slides/
│   │       ├── CoverSlide.tsx
│   │       ├── TOCSlide.tsx
│   │       ├── ContentSlide.tsx
│   │       └── SummarySlide.tsx
│   ├── hooks/
│   │   └── usePresentation.ts
│   ├── styles/
│   │   ├── _variables.scss
│   │   └── global.scss
│   ├── data/
│   │   └── slideData.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── tsconfig.json
```

---

## 执行流程

### Step 1: 信息收集

1. 确认 PPT 主题和用途
2. 确认页数和板块划分
3. 确认数据来源
4. 确认是否有自定义资源（Logo、背景图等）

### Step 2: 项目初始化

1. 创建 React + TypeScript 项目
2. 安装依赖（sass、echarts 等）
3. 创建目录结构
4. 复制静态资源到 public 目录

### Step 3: 基础组件开发

1. 创建样式变量文件 `_variables.scss`
2. 创建布局组件（SlideContainer、SlideHeader、SlideDivider）
3. 创建 `usePresentation` Hook
4. 创建 PresentationContainer 主容器

### Step 4: 内容组件开发

根据用户提供的内容类型，创建对应组件：

- 数据表格 → DataTable
- 指标数据 → MetricCard
- 文字说明 → TextBlock
- 列表内容 → ListBlock

### Step 5: 页面组装

1. 创建封面页 CoverSlide
2. 创建目录页 TOCSlide
3. 创建内容页 ContentSlide（可复用）
4. 创建总结页 SummarySlide
5. 在 App.tsx 中组装所有页面

### Step 6: 数据填充

1. 将用户提供的数据转换为 TypeScript 类型
2. 创建 `slideData.ts` 数据文件
3. 在组件中引入数据

### Step 7: 测试验证

1. 运行 `npm run dev` 启动开发服务器
2. 测试放映模式功能
3. 测试键盘/鼠标翻页
4. 验证 16:9 比例无滚动条

---

## 默认静态资源

如果用户未提供自定义资源，使用以下默认路径：

```ts
const DEFAULT_LOGO = '/logo.png';
const DEFAULT_DIVIDER = '/divider.jpeg';
const DEFAULT_BACKGROUND = '/background.jpeg';
```

默认资源位于：
- `/Users/zqian15/Documents/电信工作相关/智算软研/2月经分汇报/research-dashboard/public/`

---

## 输出要求

1. **完整可运行的项目代码**
2. **详细的 README.md 说明文档**
3. **数据文件使用 TypeScript 类型**
4. **每个组件对应独立的 SCSS Module**
5. **支持放映模式和键盘翻页**

---

## 注意事项

1. **每页必须 16:9 比例，禁止滚动条**
2. **主题色贯穿全篇，保持一致性**
3. **表格必须有斑马纹，提高可读性**
4. **关键数据必须高亮显示**
5. **放映模式下隐藏导航栏**
6. **Header 右侧不显示 Logo**，Logo 仅在放映模式右上角浮动显示
7. **内容块使用 dashed 虚线边框**，标题浮在上边框居中（主题色底色+白色加粗文本）
8. **封面页不显示 Logo 和底部 MetricCard**，底部改为部门名+日期
9. **分割线使用指定图片**，高度 10px，`object-fit: fill` 拉伸
10. **放映模式操作提示框 3 秒后自动消失**

---

## 示例调用

```
用户: 帮我创建一个季度汇报 PPT，有5页，主题是项目进展汇报

AI: 好的，我来帮你创建这个 Web PPT。

先确认几个信息：
1. 数据来源是什么？（Excel/腾讯文档/直接提供）
2. 需要哪些板块？（例如：总览、详情、问题、计划）
3. 有自定义 Logo 或背景图吗？

用户: 数据我直接给你，分4个板块：项目总览、关键成果、存在问题、下季度计划

AI: [开始创建项目...]
```

---

## 参考文档

详细设计规范请参考：`/Users/zqian15/.qclaw/workspace/ppt-template-spec.md`
