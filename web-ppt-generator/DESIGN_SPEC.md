# 通用 PPT 设计规范模板

> 文档用途：通用的 Web PPT 设计规范，适用于各类企业汇报场景
> 技术栈：React + TypeScript + SCSS

---

## 一、颜色系统

### 1.1 主题色

| 色彩角色 | 变量名 | 色值 | 用途 |
|----------|--------|------|------|
| **主题色** | `--color-primary` | `#C00000` | 主标题、强调元素、表头背景、按钮 |
| **主题色深** | `--color-primary-dark` | `#9A0000` | 主题色悬停态、渐变终点 |
| **主题色浅** | `--color-primary-light` | `#FFE5E5` | 主题色背景、选中态 |
| **主题色淡** | `--color-primary-faded` | `rgba(192,0,0,0.1)` | 次级强调背景 |

### 1.2 辅助色

| 色彩角色 | 变量名 | 色值 | 用途 |
|----------|--------|------|------|
| 辅助蓝 | `--color-secondary` | `#003D7A` | 副标题、链接、图表配色 |
| 辅助蓝浅 | `--color-secondary-light` | `#4A90E2` | 次级链接、图标 |
| 辅助蓝背景 | `--color-secondary-bg` | `#E6F2FF` | 悬停背景、选中背景 |

### 1.3 功能色

| 色彩角色 | 变量名 | 色值 | 用途 |
|----------|--------|------|------|
| **成功绿** | `--color-success` | `#00B050` | 达标、优秀、正向指标 |
| 成功绿背景 | `--color-success-bg` | `#E8F5E9` | 成功态背景 |
| **警告黄** | `--color-warning` | `#FFA500` | 中等、需关注 |
| 警告黄背景 | `--color-warning-bg` | `#FFF8E1` | 警告态背景 |
| **危险红** | `--color-danger` | `#FF0000` | 不达标、风险 |
| 危险红背景 | `--color-danger-bg` | `#FFEBEE` | 危险态背景 |
| 信息蓝 | `--color-info` | `#2196F3` | 提示、说明 |
| 信息蓝背景 | `--color-info-bg` | `#E3F2FD` | 信息态背景 |

### 1.4 中性色（文字与边框）

| 色彩角色 | 变量名 | 色值 | 用途 |
|----------|--------|------|------|
| 文字主色 | `--text-primary` | `#272525` | 正文、标题、重要文字 |
| 文字次色 | `--text-secondary` | `#666666` | 说明文字、次要信息 |
| 文字弱色 | `--text-muted` | `#999999` | 提示文字、占位符 |
| 文字禁用 | `--text-disabled` | `#CCCCCC` | 禁用状态文字 |
| 文字反色 | `--text-inverse` | `#FFFFFF` | 深色背景上的文字 |

### 1.5 背景色

| 色彩角色 | 变量名 | 色值 | 用途 |
|----------|--------|------|------|
| 页面背景 | `--bg-page` | `#F5F5F5` | 页面主背景 |
| 卡片背景 | `--bg-card` | `#FFFFFF` | 卡片、内容块背景 |
| 表格斑马纹1 | `--bg-table-odd` | `#CFD5EA` | 表格奇数行 |
| 表格斑马纹2 | `--bg-table-even` | `#E9EBF5` | 表格偶数行 |
| 悬停背景 | `--bg-hover` | `#E6F2FF` | 悬停态背景 |
| 选中背景 | `--bg-selected` | `#FFF5F5` | 选中态背景 |

### 1.6 边框色

| 色彩角色 | 变量名 | 色值 | 用途 |
|----------|--------|------|------|
| 默认边框 | `--border-default` | `#E6F2FF` | 默认边框颜色 |
| 悬停边框 | `--border-hover` | `#C00000` | 悬停态边框 |
| 强调边框 | `--border-highlight` | `#C00000` | 强调元素边框 |
| 分割线 | `--border-divider` | `#E6F2FF` | 内容分割线 |

### 1.7 CSS 变量完整定义

```css
:root {
  /* 主题色 */
  --color-primary: #C00000;
  --color-primary-dark: #9A0000;
  --color-primary-light: #FFE5E5;
  --color-primary-faded: rgba(192, 0, 0, 0.1);
  
  /* 辅助色 */
  --color-secondary: #003D7A;
  --color-secondary-light: #4A90E2;
  --color-secondary-bg: #E6F2FF;
  
  /* 功能色 */
  --color-success: #00B050;
  --color-success-bg: #E8F5E9;
  --color-warning: #FFA500;
  --color-warning-bg: #FFF8E1;
  --color-danger: #FF0000;
  --color-danger-bg: #FFEBEE;
  --color-info: #2196F3;
  --color-info-bg: #E3F2FD;
  
  /* 文字色 */
  --text-primary: #272525;
  --text-secondary: #666666;
  --text-muted: #999999;
  --text-disabled: #CCCCCC;
  --text-inverse: #FFFFFF;
  
  /* 背景色 */
  --bg-page: #F5F5F5;
  --bg-card: #FFFFFF;
  --bg-table-odd: #CFD5EA;
  --bg-table-even: #E9EBF5;
  --bg-hover: #E6F2FF;
  --bg-selected: #FFF5F5;
  
  /* 边框色 */
  --border-default: #E6F2FF;
  --border-hover: #C00000;
  --border-highlight: #C00000;
  --border-divider: #E6F2FF;
  
  /* 阴影 */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 32px rgba(192, 0, 0, 0.12);
  --shadow-glow: 0 4px 12px rgba(192, 0, 0, 0.15);
  
  /* 圆角 */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  /* 间距 */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
}
```

---

## 二、页面结构

### 2.1 页面层级划分

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER 区域（固定高度）                                     │
│  ├── 左侧：章节标题                                          │
│  └── 右侧：（不显示 Logo，Logo 仅在放映模式右上角浮动显示）      │
├─────────────────────────────────────────────────────────────┤
│  分割线（装饰性图形）                                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  CONTENT 区域（可滚动）                                       │
│  ├── 内容块 A                                                │
│  ├── 内容块 B                                                │
│  └── 内容块 C                                                │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  FOOTER 区域（可选，固定高度）                                │
│  └── 小结 / 页面导航                                          │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 页面尺寸规范

| 属性 | 值 | 说明 |
|------|-----|------|
| 宽高比 | 16:9 | 标准宽屏比例 |
| 设计稿宽度 | 1920px | 设计基准 |
| 设计稿高度 | 1080px | 设计基准 |
| 最小支持宽度 | 1366px | 最小适配宽度 |

**⚠️ 重要约束：每页 PPT 必须严格遵守 16:9 比例，内容区域不得出现滚动条！**

```tsx
// 页面容器样式 - 固定 16:9 比例，无滚动条
.slide {
  width: 100vw;
  height: 100vh;           // 视口高度
  aspect-ratio: 16 / 9;    // 强制 16:9 比例
  overflow: hidden;        // 禁止滚动条
  position: relative;
  display: flex;
  flex-direction: column;
}

// 内容区域 - 自适应剩余高度，不滚动
.slide-content {
  flex: 1;
  overflow: hidden;        // 禁止滚动
  display: flex;
  flex-direction: column;
}
```

---

## 三、静态资源

### 3.1 资源路径映射

| 资源类型 | 文件路径 | 用途 |
|----------|----------|------|
| **Logo** | `/Users/zqian15/Documents/电信工作相关/智算软研/2月经分汇报/research-dashboard/public/image7.png` | 放映模式右上角浮动 Logo（不在 Header 中显示） |
| **分割线图片** | `/Users/zqian15/Documents/电信工作相关/智算软研/2月经分汇报/research-dashboard/public/image3.jpeg` | Header 与 Content 之间的装饰分割 |
| **背景图片** | `/Users/zqian15/Documents/电信工作相关/智算软研/2月经分汇报/research-dashboard/public/background.jpeg` | PPT 页面背景（封面页等） |

### 3.2 React 资源引用

```tsx
// 将资源复制到 React 项目的 public 目录
// public/
//   ├── logo.png (或 image7.png)  <- 放映模式浮动 Logo
//   ├── divider-image.jpeg       <- 分割线图片 (image3.jpeg)
//   └── background.jpeg           <- 背景图片

// 在组件中引用
const LOGO_SRC = '/image7.png';
const DIVIDER_SRC = '/divider-image.jpeg';
const BACKGROUND_SRC = '/background.jpeg';
```

### 3.3 资源使用规范

**Logo 图片（仅放映模式浮动显示）**

```tsx
// Logo 不在 SlideHeader 中渲染
// 只在 PresentationContainer 中根据 isPresentationMode 条件渲染
{isPresentationMode && (
  <div className="presentation-logo">
    <img src="/image7.png" alt="Logo" />
  </div>
)}
```

**分割线图片（10px 高，指定图片拉伸填充）**

```tsx
// 分割线组件
const SlideDivider: React.FC = () => (
  <div className={styles.divider}>
    <img src="/divider-image.jpeg" alt="" className={styles.image} />
  </div>
);
```

```scss
.divider {
  width: 100%;
  height: 10px;           // 分割区域高度 10px
  overflow: hidden;
  flex-shrink: 0;
  margin-top: -8px;        // 上边距收紧，减少与 Header 的间距
}

.image {
  width: 100%;
  height: 100%;
  object-fit: fill;         // 横向拉伸填充
}
```

**背景图片**

```tsx
// 页面背景组件
const SlideBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div 
    className="slide-wrapper"
    style={{ backgroundImage: `url(${BACKGROUND_SRC})` }}
  >
    {children}
  </div>
);
```

```scss
.slide-wrapper {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  
  // 可选：添加半透明遮罩提高文字可读性
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.85);  // 白色半透明遮罩
    z-index: 0;
  }
  
  > * {
    position: relative;
    z-index: 1;
  }
}
```

---

## 四、React 技术实现

### 4.1 技术栈

```json
{
  "framework": "React 18 + TypeScript",
  "styling": "SCSS Modules",
  "charts": "ECharts 5.x (可选)",
  "router": "React Router 6 (可选，用于页面切换)"
}
```

### 4.2 项目结构

```
ppt-project/
├── public/
│   ├── image7.png          # 放映模式浮动 Logo
│   ├── divider-image.jpeg  # 分割线图片 (image3.jpeg)
│   └── background.jpeg     # 背景图片
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SlideContainer.tsx    # 幻灯片容器
│   │   │   ├── SlideHeader.tsx       # Header 区域
│   │   │   ├── SlideDivider.tsx      # 分割线
│   │   │   └── SlideFooter.tsx        # Footer 区域
│   │   ├── content/
│   │   │   ├── DataTable.tsx          # 数据表格
│   │   │   ├── MetricCard.tsx        # 指标卡片
│   │   │   ├── TextBlock.tsx         # 文本块
│   │   │   ├── ListBlock.tsx          # 列表块
│   │   │   ├── ChartContainer.tsx    # 图表容器
│   │   │   └── ComparisonBlock.tsx    # 对比块
│   │   └── slides/
│   │       ├── CoverSlide.tsx        # 封面页
│   │       ├── TOCSlide.tsx          # 目录页
│   │       ├── ContentSlide.tsx      # 内容页模板
│   │       └── SummarySlide.tsx      # 总结页
│   ├── styles/
│   │   ├── _variables.scss           # 变量定义
│   │   ├── _mixins.scss              # 混入
│   │   └── global.scss               # 全局样式
│   ├── data/
│   │   └── mockData.ts               # 数据文件
│   ├── types/
│   │   └── index.ts                  # 类型定义
│   ├── App.tsx
│   └── main.tsx
└── package.json
```

### 4.3 核心组件实现

**SlideContainer - 幻灯片容器**

```tsx
// src/components/layout/SlideContainer.tsx
import React from 'react';
import styles from './SlideContainer.module.scss';

interface SlideContainerProps {
  children: React.ReactNode;
  showBackground?: boolean;
}

export const SlideContainer: React.FC<SlideContainerProps> = ({ 
  children, 
  showBackground = true 
}) => {
  return (
    <div 
      className={styles.container}
      style={showBackground ? {
        backgroundImage: 'url(/background.jpeg)'
      } : undefined}
    >
      {children}
    </div>
  );
};
```

```scss
// SlideContainer.module.scss
.container {
  width: 100vw;
  height: 100vh;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  
  // 半透明遮罩
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.88);
    z-index: 0;
  }
  
  > * {
    position: relative;
    z-index: 1;
  }
}
```

**SlideHeader - Header 区域（不显示 Logo）**

```tsx
// src/components/layout/SlideHeader.tsx
import React from 'react';
import styles from './SlideHeader.module.scss';

interface SlideHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
}

export const SlideHeader: React.FC<SlideHeaderProps> = ({ 
  number, 
  title, 
  subtitle 
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.titleGroup}>
        {number && <span className={styles.number}>{number}</span>}
        <div>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
      {/* 不在 Header 中渲染 Logo，Logo 仅在放映模式浮动显示 */}
    </header>
  );
};
```

```scss
// SlideHeader.module.scss
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 32px;
  background: var(--bg-card);
  flex-shrink: 0;
}

.titleGroup {
  display: flex;
  align-items: baseline;
  gap: 16px;
}

.number {
  font-size: 56px;
  font-weight: 700;
  color: var(--text-muted);
  font-family: 'Arial', sans-serif;
  line-height: 1;
}

.title {
  font-size: 32px;
  font-weight: 600;
  color: var(--color-primary);
  line-height: 1.3;
  margin: 0;
}

.subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  margin: 4px 0 0;
}
```

**SlideDivider - 分割线（图片拉伸填充）**

```tsx
// src/components/layout/SlideDivider.tsx
import React from 'react';
import styles from './SlideDivider.module.scss';

export const SlideDivider: React.FC = () => {
  return (
    <div className={styles.divider}>
      <img src="/divider-image.jpeg" alt="" className={styles.image} />
    </div>
  );
};
```

```scss
// SlideDivider.module.scss
.divider {
  width: 100%;
  height: 10px;
  overflow: hidden;
  flex-shrink: 0;
  margin-top: -8px;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
```

**ContentSlide - 内容页模板**

```tsx
// src/components/slides/ContentSlide.tsx
import React from 'react';
import { SlideContainer } from '../layout/SlideContainer';
import { SlideHeader } from '../layout/SlideHeader';
import { SlideDivider } from '../layout/SlideDivider';
import styles from './ContentSlide.module.scss';

interface ContentSlideProps {
  number?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  summary?: React.ReactNode;
}

export const ContentSlide: React.FC<ContentSlideProps> = ({
  number,
  title,
  subtitle,
  children,
  summary
}) => {
  return (
    <SlideContainer>
      <SlideHeader number={number} title={title} subtitle={subtitle} />
      <SlideDivider />
      
      <main className={styles.content}>
        {children}
      </main>
      
      {summary && (
        <footer className={styles.footer}>
          {summary}
        </footer>
      )}
    </SlideContainer>
  );
};
```

```scss
// ContentSlide.module.scss
.content {
  flex: 1;
  padding: 20px 32px;
  overflow: hidden;           // 禁止滚动
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer {
  padding: 16px 32px;
  flex-shrink: 0;
}
```

### 4.4 完整页面示例

```tsx
// 示例：数据表格页面
import React from 'react';
import { ContentSlide } from '../components/slides/ContentSlide';
import { DataTable } from '../components/content/DataTable';
import { SummaryBox } from '../components/content/SummaryBox';
import { mockTableData } from '../data/mockData';

const TableSlide: React.FC = () => {
  const summaryItems = [
    { text: '关键发现一：收入增长15%', highlight: '增长15%' },
    { text: '关键发现二：项目完成率达标' },
  ];

  return (
    <ContentSlide
      number="01"
      title="科研板块分析"
      subtitle="8个行业投入产出分析"
      summary={<SummaryBox title="关键发现" items={summaryItems} />}
    >
      <DataTable 
        data={mockTableData}
        highlightColumns={['roi']}
      />
    </ContentSlide>
  );
};

export default TableSlide;
```

---

## 五、Header 区域设计

### 5.1 Header 结构

```
┌─────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────┐                             │
│ │                             │                             │
│ │  标题区域                    │    （Logo 仅在放映模式浮动显示） │
│ │  ├── 编号：01               │                             │
│ │  └── 标题文字                │                             │
│ │                             │                             │
│ └─────────────────────────────┘                             │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 标题样式

| 元素 | 字号 | 字重 | 颜色 | 对齐 |
|------|------|------|------|------|
| 章节编号 | 56px | 700 (Bold) | `#999999` 灰色 | 左对齐 |
| 章节标题 | 32px | 600 (SemiBold) | `#C00000` 主题色 | 左对齐 |
| 副标题 | 18px | 400 (Regular) | `#666666` 次色 | 左对齐 |

```scss
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 32px;
  height: 100px;
  background: var(--bg-card);
}

.header-title-group {
  display: flex;
  align-items: baseline;
  gap: 16px;
}

.header-number {
  font-size: 56px;
  font-weight: 700;
  color: var(--text-muted);  // 灰色
  font-family: 'Arial', sans-serif;
  line-height: 1;
}

.header-title {
  font-size: 32px;
  font-weight: 600;
  color: var(--color-primary);  // 主题色
  line-height: 1.3;
}

.header-subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  margin-top: 4px;
}
```

### 5.3 Logo 区域

**Header 中不显示 Logo**，Logo 仅在放映模式下浮动显示。

```scss
// Header 中不渲染 Logo 组件
// 只在 PresentationContainer 中渲染浮动 Logo
```

**放映模式浮动 Logo**

```scss
// 放映模式 Logo - 右上角浮动，垂直居中
.presentationLogo {
  position: fixed;
  top: 10px;           // 距顶部 10px
  right: 32px;
  height: 58px;        // 容器高度
  display: flex;
  align-items: center; // 垂直居中
  z-index: 1001;
  animation: fadeIn 0.5s ease;

  img {
    height: 52px;      // Logo 图片高度
    width: auto;
  }
}
```

### 5.4 分割线设计

**使用指定图片，高度 10px，横向拉伸填充。**

```tsx
// 分割线组件
const SlideDivider: React.FC = () => (
  <div className={styles.divider}>
    <img src="/divider-image.jpeg" alt="" className={styles.image} />
  </div>
);
```

```scss
.slide-divider {
  width: 100%;
  height: 10px;            // 分割区域高度
  overflow: hidden;
  flex-shrink: 0;
  margin-top: -8px;        // 上边距收紧，减少与 Header 的间距
}

.divider-image {
  width: 100%;
  height: 100%;
  object-fit: fill;         // 横向拉伸填充，宽度可根据实际情况拉伸
}
```

**分割线图片来源：**
```
/Users/zqian15/Documents/电信工作相关/智算软研/2月经分汇报/research-dashboard/public/image3.jpeg
```
复制到项目 `public/divider-image.jpeg`。

---

## 六、Content 区域设计

### 6.1 内容块类型

| 类型 | 用途 | 样式特征 |
|------|------|----------|
| **数据表格** | 展示结构化数据 | 表头主题色背景、斑马纹行 |
| **指标卡片组** | 展示关键KPI | 卡片网格布局、悬停效果 |
| **纯文本块** | 展示说明文字 | 带边框、可选标题 |
| **图表容器** | 展示数据可视化 | 统一圆角边框 |
| **列表内容** | 展示要点列表 | 带图标的项目符号 |
| **引用块** | 展示重点提示 | 左侧边框强调 |
| **对比块** | 展示对比内容 | 双栏布局 |

---

### 6.2 数据表格

#### 6.2.1 表格结构

```html
<div class="data-table-wrapper">
  <table class="data-table">
    <thead>
      <tr class="table-header">
        <th>列标题1</th>
        <th>列标题2</th>
        <th>列标题3</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-row odd">
        <td>数据</td>
        <td class="highlight-success">98%</td>
        <td>数据</td>
      </tr>
      <tr class="table-row even">
        <td>数据</td>
        <td class="highlight-danger">45%</td>
        <td>数据</td>
      </tr>
    </tbody>
  </table>
</div>
```

#### 6.2.2 表格样式规范

| 元素 | 样式 |
|------|------|
| 表头背景 | `#C00000` 主题色 |
| 表头文字 | `#FFFFFF` 白色，加粗，居中 |
| 表头高度 | 50px |
| 数据行高度 | 44px |
| 奇数行背景 | `#CFD5EA` 浅蓝 |
| 偶数行背景 | `#E9EBF5` 浅灰 |
| 数据文字 | `#272525` 主色，居中 |
| 单元格内边距 | 12px 16px |
| 悬停背景 | `#E6F2FF` |

#### 6.2.3 高亮单元格

| 高亮类型 | 背景色 | 文字色 | 用途 |
|----------|--------|--------|------|
| 成功 | `#00B050` | `#FFFFFF` | 达标、优秀 |
| 警告 | `#FFA500` | `#FFFFFF` | 中等、关注 |
| 危险 | `#FF0000` | `#FFFFFF` | 不达标、风险 |
| 信息 | `#E6F2FF` | `#003D7A` | 普通高亮 |

```scss
.data-table-wrapper {
  background: var(--bg-card);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  
  th, td {
    text-align: center;
    vertical-align: middle;
    padding: 12px 16px;
  }
}

.table-header {
  background: var(--color-primary);
  height: 50px;
  
  th {
    color: var(--text-inverse);
    font-weight: 600;
    font-size: 14px;
  }
}

.table-row {
  height: 44px;
  transition: all 0.2s ease;
  
  &.odd { background: var(--bg-table-odd); }
  &.even { background: var(--bg-table-even); }
  
  &:hover {
    background: var(--bg-hover);
  }
}

// 高亮单元格
.highlight-success {
  background: var(--color-success);
  color: var(--text-inverse);
  font-weight: 600;
}

.highlight-warning {
  background: var(--color-warning);
  color: var(--text-inverse);
  font-weight: 600;
}

.highlight-danger {
  background: var(--color-danger);
  color: var(--text-inverse);
  font-weight: 600;
}
```

---

### 6.3 指标卡片组

#### 6.3.1 卡片布局

```
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│  💰      │ │  📁      │ │  📊      │ │  💵      │ │  📈      │
│  总投入   │ │  项目数  │ │  进度    │ │  创收    │ │  复用率  │
│  1500万  │ │  156个   │ │  85%     │ │  4200万  │ │  72%     │
│  ↑15%    │ │  ↑12%    │ │  正常    │ │  ↑15%    │ │  达标    │
└──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘
```

#### 6.3.2 卡片样式规范

| 元素 | 样式 |
|------|------|
| 卡片背景 | `#FFFFFF` 白色 |
| 卡片边框 | `2px solid #E6F2FF` 默认，悬停变主题色 |
| 卡片圆角 | `8px` |
| 卡片内边距 | `16px 20px` |
| 图标大小 | `24px` |
| 数值字号 | `32px` |
| 数值颜色 | `#C00000` 主题色，成功时用绿色 |
| 标签字号 | `14px` |
| 标签颜色 | `#666666` 次色 |

#### 6.3.3 卡片状态

| 状态 | 数值颜色 | 趋势标签背景 |
|------|----------|--------------|
| 默认 | `#C00000` 主题色 | 无 |
| 成功/达标 | `#00B050` 绿色 | `#E8F5E9` 浅绿 |
| 警告/关注 | `#FFA500` 黄色 | `#FFF8E1` 浅黄 |
| 危险/不达标 | `#FF0000` 红色 | `#FFEBEE` 浅红 |

```scss
.metric-cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.metric-card {
  background: var(--bg-card);
  border: 2px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-glow);
    transform: translateY(-2px);
  }
}

.metric-card-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.metric-icon {
  font-size: 24px;
}

.metric-label {
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;
}

.metric-value {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-primary);
  
  &.success { color: var(--color-success); }
  &.warning { color: var(--color-warning); }
  &.danger { color: var(--color-danger); }
}

.metric-unit {
  font-size: 14px;
  color: var(--text-secondary);
  margin-left: 4px;
}

.metric-trend {
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
  
  &.up { 
    color: var(--color-success); 
    background: var(--color-success-bg); 
  }
  &.down { 
    color: var(--color-danger); 
    background: var(--color-danger-bg); 
  }
  &.stable { 
    color: var(--text-secondary); 
    background: var(--bg-hover); 
  }
}
```

---

### 6.4 纯文本块

#### 6.4.1 文本块类型

**类型 A：带标题的内容块（dashed border + 浮动标题）**

```
        ┌──── 标题文字（主题色底色+白色加粗）────┐
  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┐
  │                                                │
  │  正文内容区域，用于展示较长的说明文字、          │
  │  段落内容或详细的描述信息。                       │
  │                                                │
  │  支持多段落，段落之间有适当间距。                  │
  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┘
```

**样式规范：**
- 边框：`2px dashed var(--border-highlight)` 虚线边框（主题色）
- 标题浮在上边框居中：`position: absolute; top: -12px; left: 50%; transform: translateX(-50%)`
- 标题背景：`var(--color-primary)` 主题色底色
- 标题文字：`var(--text-inverse)` 白色，`font-weight: 700; font-size: 14px`
- 标题外边距：`padding: 3px 14px; border-radius: 4px; white-space: nowrap`
- **不使用 icon**：标题只显示纯文字
- 容器需要 `padding-top: 28px; position: relative` 避免标题遮挡内容

**类型 B：无边框文本块**

```
  正文内容直接展示，无边框包裹。
  适合页面底部的补充说明文字。
```

**类型 C：引用块**

```
┃ 重点提示内容，左侧有主题色边框
┃ 用于强调重要信息或注意事项
```

#### 6.4.2 文本块（ContentBlock）样式规范

| 元素 | 样式 |
|------|------|
| 块背景 | `#FFFFFF` 白色 |
| 块边框 | `2px dashed var(--border-highlight)` 虚线边框（主题色） |
| 块圆角 | `8px` |
| 块内边距 | `28px 20px 16px`（顶部加大，避免标题遮挡） |
| 块定位 | `position: relative`（标题浮动需要） |
| 标题字号 | `14px` |
| 标题颜色 | `#FFFFFF` 白色（在主题色底色上） |
| 标题背景 | `var(--color-primary)` 主题色 |
| 标题字重 | `700 (Bold)` |
| 标题位置 | 浮动在上边框居中：`position: absolute; top: -12px; left: 50%; transform: translateX(-50%)` |
| 标题外边距 | `padding: 3px 14px; border-radius: 4px; white-space: nowrap` |
| **不使用 icon** | 标题只显示纯文字，去掉 icon prop |
| 正文字号 | `14px - 16px` |
| 正文颜色 | `#272525` 主色 |
| 行高 | `1.6 - 1.8` |

```scss
.content-block {
  background: var(--bg-card);
  border: 2px dashed var(--border-highlight);
  border-radius: var(--radius-md);
  padding: 28px 20px 16px;
  position: relative;
}

.content-block-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-inverse);
  background: var(--color-primary);
  padding: 3px 14px;
  border-radius: var(--radius-sm);
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  z-index: 1;
}

.content-block-content {
  font-size: 14px;
  color: var(--text-primary);
  line-height: 1.8;
  
  p {
    margin: 0 0 12px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}

// 引用块
.quote-block {
  background: var(--bg-card);
  border-left: 4px solid var(--color-primary);
  padding: 12px 16px;
  margin: 16px 0;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}
```

---

### 6.5 列表内容

#### 6.5.1 列表类型

**类型 A：项目符号列表**

```
● 项目一：说明文字内容
● 项目二：说明文字内容
● 项目三：说明文字内容
```

**类型 B：编号列表**

```
1. 第一项说明内容
2. 第二项说明内容
3. 第三项说明内容
```

**类型 C：图标列表**

```
✅ 已完成的任务项
⏳ 进行中的任务项
⚠️ 需要关注的问题
```

#### 6.5.2 列表样式规范

| 元素 | 样式 |
|------|------|
| 列表符号 | 主题色 `#C00000` |
| 列表项字号 | `14px - 16px` |
| 列表项颜色 | `#272525` 主色 |
| 列表项行高 | `1.8` |
| 列表项间距 | `8px - 12px` |
| 符号与文字间距 | `8px` |

```scss
.list-block {
  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}

.list-item {
  font-size: 14px;
  color: var(--text-primary);
  line-height: 1.8;
  padding-left: 20px;
  position: relative;
  margin-bottom: 8px;
  
  &::before {
    content: '●';
    position: absolute;
    left: 0;
    color: var(--color-primary);
  }
  
  &.success::before { content: '✅'; }
  &.warning::before { content: '⚠️'; }
  &.pending::before { content: '⏳'; }
}

.list-item-numbered {
  counter-increment: list-counter;
  
  &::before {
    content: counter(list-counter) '.';
    font-weight: 600;
  }
}
```

---

### 6.6 图表容器

#### 6.6.1 图表卡片布局

```
┌─────────────────────────────────────────────────────────────┐
│  图表标题                                                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                    [ECharts 图表区域]                         │
│                                                              │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  图表说明文字（可选）                                          │
└─────────────────────────────────────────────────────────────┘
```

#### 6.6.2 图表样式规范

| 元素 | 样式 |
|------|------|
| 容器背景 | `#FFFFFF` 白色 |
| 容器边框 | `2px solid #E6F2FF` |
| 容器圆角 | `8px` |
| 容器内边距 | `12px 16px` |
| 标题字号 | `14px` |
| 标题颜色 | `#C00000` 主题色 |
| 图表高度 | 根据内容自适应，通常 200-400px |

```scss
.chart-container {
  background: var(--bg-card);
  border: 2px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 12px 16px;
}

.chart-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 12px;
}

.chart-area {
  width: 100%;
  min-height: 200px;
}

.chart-caption {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 8px;
  text-align: center;
}
```

---

### 6.7 对比块

#### 6.7.1 双栏对比

```
┌───────────────────────────┐ ┌───────────────────────────┐
│  ✅ 主要成果               │ │  ⚠️ 存在问题              │
│  ● 成果一                  │ │  ● 问题一                 │
│  ● 成果二                  │ │  ● 问题二                 │
│  ● 成果三                  │ │  ● 问题三                 │
└───────────────────────────┘ └───────────────────────────┘
```

#### 6.7.2 对比块样式

```scss
.comparison-block {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.comparison-column {
  background: var(--bg-card);
  border: 2px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 20px;
  
  &.success {
    border-color: var(--color-success);
    .comparison-title { color: var(--color-success); }
  }
  
  &.warning {
    border-color: var(--color-warning);
    .comparison-title { color: var(--color-warning); }
  }
  
  &.danger {
    border-color: var(--color-danger);
    .comparison-title { color: var(--color-danger); }
  }
}

.comparison-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}
```

---

## 七、Footer 区域设计

### 7.1 小结框

```
┌─────────────────────────────────────────────────────────────┐
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                                              │
│  ● 关键发现一：说明文字                                       │
│  ● 关键发现二：说明文字                                       │
│  ● 关键发现三：说明文字                                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 7.2 小结框样式

```scss
.summary-box {
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-md);
  padding: 16px 20px;
  margin-top: 20px;
  background: var(--bg-card);
}

.summary-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 12px;
}

.summary-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.summary-item {
  font-size: 16px;
  color: var(--text-primary);
  line-height: 1.8;
  padding-left: 20px;
  position: relative;
  
  &::before {
    content: '●';
    position: absolute;
    left: 0;
    color: var(--color-primary);
  }
  
  .highlight {
    color: var(--color-primary);
    font-weight: 600;
  }
}
```

---

## 八、封面页设计

### 8.1 封面布局

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│              ████████████████████████                        │
│              █    主标题文字      █                          │
│              ████████████████████████                        │
│                                                              │
│                       副标题                                 │
│                                                              │
│                                                              │
│                     部门名称                                  │
│                       日期                                   │
│                                                              │
│                                                              │
│                                                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 8.2 封面设计规则

- **不显示 Logo**
- **不显示底部 MetricCard**（指标卡片组），改为显示部门名称 + 日期
- **使用背景图**（`background-size: cover; background-position: center`）
- **内容整体垂直居中**（`justify-content: center`）
- **标题颜色**：使用主题色 `var(--color-primary)`，不使用文字阴影
- **副标题颜色**：辅助色 `var(--color-secondary)`

### 8.3 封面样式规范

| 元素 | 字号 | 颜色 | 位置 |
|------|------|------|------|
| 主标题 | 54-72px | `#C00000` 主题色 | 垂直居中 |
| 副标题 | 28-32px | `#003D7A` 辅助色 | 主标题下方 |
| 部门名称 | 18-22px | `#272525` 主色 | 底部区域 |
| 日期 | 16-18px | `#666666` 次色 | 底部区域 |

```tsx
// CoverSlide.tsx
export const CoverSlide: React.FC = () => {
  return (
    <SlideContainer showBackground={true}>
      <div className={styles.coverPage}>
        <h1 className={styles.title}>主标题文字</h1>
        <p className={styles.subtitle}>副标题</p>
        <p className={styles.department}>部门名称</p>
        <p className={styles.date}>2026年3月</p>
      </div>
    </SlideContainer>
  );
};
```

```scss
.cover-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 60px;
  gap: 12px;
}

.cover-title {
  font-size: 64px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 16px;
  line-height: 1.2;
}

.cover-subtitle {
  font-size: 28px;
  color: var(--color-secondary);
  margin-bottom: 40px;
}

.cover-department {
  font-size: 22px;
  color: var(--text-primary);
  margin: 40px 0 8px;
  font-weight: 600;
}

.cover-date {
  font-size: 18px;
  color: var(--text-secondary);
  margin: 0;
}
```

---

## 九、目录页设计

### 9.1 目录布局

```
┌─────────────────────────────────────────────────────────────┐
│  ┌───────────────────────┐                                   │
│  │  目  录               │  CONTENTS                          │
│  └───────────────────────┘                                   │
│                                                              │
│  ┌───┬──────────────────────────────────────────────────────┐│
│  │ 1 │ ████████████████████████  第一板块标题               ││
│  └───┴──────────────────────────────────────────────────────┘│
│                                                              │
│  ┌───┬──────────────────────────────────────────────────────┐│
│  │ 2 │ ░░░░░░░░░░░░░░░░░░░░░░  第二板块标题               ││
│  └───┴──────────────────────────────────────────────────────┘│
│                                                              │
│  ┌───┬──────────────────────────────────────────────────────┐│
│  │ 3 │ ░░░░░░░░░░░░░░░░░░░░░░  第三板块标题               ││
│  └───┴──────────────────────────────────────────────────────┘│
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 9.2 目录项样式

```scss
.toc-page {
  padding: 60px 80px;
}

.toc-header {
  display: flex;
  align-items: flex-end;
  gap: 16px;
  margin-bottom: 60px;
}

.toc-title {
  font-size: 42px;
  font-weight: 700;
  color: var(--color-primary);
}

.toc-subtitle {
  font-size: 14px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.toc-item {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(8px);
  }
}

.toc-number {
  width: 60px;
  height: 60px;
  background: var(--color-primary);
  color: var(--text-inverse);
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  
  &.inactive {
    background: rgba(192, 0, 0, 0.4);
  }
}

.toc-item-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  
  &.active {
    color: var(--color-primary);
  }
}
```

---

## 十、动画规范

### 10.1 动画时长标准

| 动画类型 | 时长 | 缓动函数 |
|----------|------|----------|
| 快速响应（悬停、点击） | 150-200ms | `ease-out` |
| 标准过渡（展开、收起） | 300-400ms | `ease-in-out` |
| 页面切换 | 500-600ms | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| 数字滚动 | 800-1000ms | `ease-out` |

### 10.2 预设缓动函数

```scss
// 缓动函数
$ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);
$ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
$ease-slide: cubic-bezier(0.25, 0.46, 0.45, 0.94);
$ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### 10.3 常用动画

```scss
// 淡入上移
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// 淡入缩放
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

// 数字滚动
@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// 页面滑入
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

// 使用示例
.animate-fade-in-up {
  animation: fadeInUp 0.6s $ease-out both;
}

.animate-stagger {
  > * {
    animation: fadeInUp 0.6s $ease-out both;
    
    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        animation-delay: #{$i * 0.1}s;
      }
    }
  }
}
```

---

## 十一、放映模式与交互

### 11.1 放映模式功能

| 功能 | 触发方式 | 说明 |
|------|----------|------|
| 进入放映 | 点击按钮 / 按 `F11` | 全屏展示，隐藏导航，显示浮动 Logo 和操作提示 |
| 退出放映 | 按 `ESC` / 再次点击按钮 | 退出全屏，显示导航 |
| 操作提示自动消失 | 进入放映后 3 秒 | 右下角提示框自动消失 |
| 下一页 | 空格 / 右箭头 / 鼠标左键单击 | 跳转到下一页 |
| 上一页 | 左箭头 / 鼠标右键单击 | 返回上一页 |
| 首页 | `Home` 键 | 跳转到第一页 |
| 末页 | `End` 键 | 跳转到最后一页 |
| 浮动 Logo | 仅放映模式显示 | 右上角固定，垂直居中 |

### 11.2 React 实现

```tsx
// src/hooks/usePresentation.ts
import { useState, useEffect, useCallback, useRef } from 'react';

interface UsePresentationOptions {
  totalPages: number;
  onSlideChange?: (index: number) => void;
}

export function usePresentation({ totalPages, onSlideChange }: UsePresentationOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const hintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 下一页
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = Math.min(prev + 1, totalPages - 1);
      onSlideChange?.(next);
      return next;
    });
  }, [totalPages, onSlideChange]);

  // 上一页
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = Math.max(prev - 1, 0);
      onSlideChange?.(next);
      return next;
    });
  }, [onSlideChange]);

  // 跳转指定页
  const goToSlide = useCallback((index: number) => {
    const target = Math.max(0, Math.min(index, totalPages - 1));
    setCurrentIndex(target);
    onSlideChange?.(target);
  }, [totalPages, onSlideChange]);

  // 切换放映模式（带操作提示自动消失）
  const togglePresentationMode = useCallback(() => {
    setIsPresentationMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.requestFullscreen?.().catch(() => {});
        setShowHint(true);
        hintTimerRef.current = setTimeout(() => setShowHint(false), 3000); // 3秒后自动消失
      } else {
        document.exitFullscreen?.().catch(() => {});
        setShowHint(false);
        if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
      }
      return next;
    });
  }, []);

  // 键盘事件处理
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 放映模式下 ESC 退出
      if (isPresentationMode && e.key === 'Escape') {
        setIsPresentationMode(false);
        document.exitFullscreen?.().catch(() => {});
        return;
      }

      switch (e.key) {
        case ' ':
        case 'ArrowRight':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(totalPages - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPresentationMode, nextSlide, prevSlide, goToSlide, totalPages]);

  // 鼠标点击处理
  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!isPresentationMode) return;
    
    // 左键：下一页，右键：上一页
    if (e.button === 0) {
      nextSlide();
    } else if (e.button === 2) {
      prevSlide();
    }
  }, [isPresentationMode, nextSlide, prevSlide]);

  // 禁用右键菜单
  useEffect(() => {
    if (isPresentationMode) {
      const preventContext = (e: MouseEvent) => e.preventDefault();
      document.addEventListener('contextmenu', preventContext);
      return () => document.removeEventListener('contextmenu', preventContext);
    }
  }, [isPresentationMode]);

  // Cleanup hint timer on unmount
  useEffect(() => {
    return () => {
      if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
    };
  }, []);

  return {
    currentIndex,
    isPresentationMode,
    showHint,          // 新增：控制操作提示框显隐
    nextSlide,
    prevSlide,
    goToSlide,
    togglePresentationMode,
    handleClick,
  };
}
```

### 11.3 PPT 容器组件

```tsx
// src/components/PresentationContainer.tsx
import React from 'react';
import { usePresentation } from '../hooks/usePresentation';
import styles from './PresentationContainer.module.scss';

interface Slide {
  id: string;
  title: string;
  component: React.ReactNode;
}

interface PresentationContainerProps {
  slides: Slide[];
  navItems?: string[];
}

export const PresentationContainer: React.FC<PresentationContainerProps> = ({
  slides,
  navItems,
}) => {
  const {
    currentIndex,
    isPresentationMode,
    showHint,
    nextSlide,
    prevSlide,
    goToSlide,
    togglePresentationMode,
    handleClick,
  } = usePresentation({ totalPages: slides.length });

  return (
    <div 
      className={styles.container}
      onClick={handleClick}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* 导航栏 - 非放映模式显示 */}
      {!isPresentationMode && (
        <nav className={styles.navbar}>
          <button 
            className={styles.navBtn}
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            ← 上一页
          </button>

          <div className={styles.navIndicators}>
            {navItems?.map((item, index) => (
              <button
                key={index}
                className={`${styles.navIndicator} ${currentIndex === index ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
              >
                {item}
              </button>
            ))}
          </div>

          <button 
            className={styles.navBtn}
            onClick={nextSlide}
            disabled={currentIndex === slides.length - 1}
          >
            下一页 →
          </button>

          <button 
            className={`${styles.navBtn} ${styles.presentationBtn}`}
            onClick={togglePresentationMode}
          >
            📺 放映模式
          </button>
        </nav>
      )}

      {/* 放映模式 Logo */}
      {isPresentationMode && (
        <div className={styles.presentationLogo}>
          <img src="/logo.png" alt="Logo" />
        </div>
      )}

      {/* 幻灯片容器 */}
      <div 
        className={styles.slidesWrapper}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className={styles.slide}>
            {slide.component}
          </div>
        ))}
      </div>

      {/* 放映模式提示 - 3秒后自动消失 */}
      {isPresentationMode && showHint && (
        <div className={styles.presentationHint}>
          按 <kbd>ESC</kbd> 退出放映 | <kbd>←</kbd><kbd>→</kbd> 或 <kbd>空格</kbd> 翻页
        </div>
      )}

      {/* 页码指示器 */}
      <div className={styles.pageIndicator}>
        {currentIndex + 1} / {slides.length}
      </div>
    </div>
  );
};
```

### 11.4 样式定义

```scss
// PresentationContainer.module.scss
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: var(--bg-page);
}

// 导航栏
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: var(--bg-card);
  border-bottom: 3px solid var(--color-primary);
  box-shadow: var(--shadow-sm);
}

.navBtn {
  padding: 12px 24px;
  background: var(--bg-card);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-sm);
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: var(--color-primary);
    color: var(--text-inverse);
    box-shadow: var(--shadow-glow);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: var(--bg-page);
  }

  &.presentationBtn {
    background: var(--color-primary);
    color: var(--text-inverse);
    border-color: var(--color-primary);

    &:hover {
      background: var(--color-primary-dark);
      box-shadow: var(--shadow-glow);
    }
  }
}

.navIndicators {
  display: flex;
  gap: 8px;
}

.navIndicator {
  padding: 10px 18px;
  background: var(--bg-card);
  border: 2px solid var(--border-default);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    background: var(--color-primary-light);
  }

  &.active {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--text-inverse);
    font-weight: 600;
  }
}

// 幻灯片容器
.slidesWrapper {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide {
  flex-shrink: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

// 放映模式 Logo（右上角浮动，垂直居中）
.presentationLogo {
  position: fixed;
  top: 10px;
  right: 32px;
  height: 58px;
  display: flex;
  align-items: center;
  z-index: 1001;
  animation: fadeIn 0.5s ease;

  img {
    height: 52px;
    width: auto;
  }
}

// 放映模式提示
.presentationHint {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1001;
  padding: 12px 20px;
  background: var(--bg-card);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-sm);
  color: var(--color-primary);
  font-size: 13px;
  font-weight: 600;
  box-shadow: var(--shadow-glow);
  animation: fadeIn 0.3s ease;

  kbd {
    display: inline-block;
    padding: 3px 8px;
    background: var(--color-primary);
    color: var(--text-inverse);
    border-radius: 3px;
    font-family: monospace;
    font-weight: 700;
    margin: 0 4px;
  }
}

// 页码指示器
.pageIndicator {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.6);
  color: var(--text-inverse);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  z-index: 1001;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### 11.5 键盘快捷键速查

| 按键 | 功能 | 适用模式 |
|------|------|----------|
| `Space` 空格 | 下一页 | 全部 |
| `→` 右箭头 | 下一页 | 全部 |
| `←` 左箭头 | 上一页 | 全部 |
| `Home` | 跳转首页 | 全部 |
| `End` | 跳转末页 | 全部 |
| `ESC` | 退出放映 | 放映模式 |
| `F11` | 进入/退出全屏 | 全部 |
| 鼠标左键 | 下一页 | 放映模式 |
| 鼠标右键 | 上一页 | 放映模式 |

### 11.6 使用示例

```tsx
// App.tsx
import React from 'react';
import { PresentationContainer } from './components/PresentationContainer';
import { CoverSlide } from './components/slides/CoverSlide';
import { ContentSlide } from './components/slides/ContentSlide';
import { SummarySlide } from './components/slides/SummarySlide';

const slides = [
  { id: 'cover', title: '封面', component: <CoverSlide /> },
  { id: 'toc', title: '目录', component: <TOCSlide /> },
  { id: 'overview', title: '总览', component: <ContentSlide number="01" title="总览" /> },
  { id: 'detail1', title: '详情1', component: <ContentSlide number="02" title="详情" /> },
  { id: 'summary', title: '总结', component: <SummarySlide /> },
];

const navItems = ['封面', '目录', '总览', '详情', '总结'];

function App() {
  return (
    <PresentationContainer slides={slides} navItems={navItems} />
  );
}

export default App;
```

---

## 十二、响应式断点

| 断点名称 | 宽度范围 | 适用设备 |
|----------|----------|----------|
| Desktop | ≥1920px | 大屏、投影 |
| Laptop | 1366-1919px | 笔记本、会议屏 |
| Tablet | 768-1365px | 平板（降级支持） |

```scss
// Desktop 默认样式
.container {
  padding: 32px;
  font-size: 16px;
}

// Laptop
@media (max-width: 1919px) {
  .container {
    padding: 24px;
    font-size: 14px;
  }
}

// Tablet
@media (max-width: 1365px) {
  .container {
    padding: 16px;
    font-size: 12px;
  }
  
  .metric-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 十三、设计检查清单

### 13.1 每页检查项

- [ ] Header 区域标题使用主题色
- [ ] Header 右侧不显示 Logo（Logo 仅在放映模式浮动显示）
- [ ] Header 与 Content 之间分割线存在（10px 高，图片拉伸）
- [ ] 内容块使用 dashed border + 浮动标题居中（主题色底色+白色加粗）
- [ ] 表格表头红色背景白色文字
- [ ] 表格交替行颜色正确
- [ ] 关键指标高亮显示
- [ ] Footer 小结框红色边框
- [ ] 封面页不显示 Logo 和底部 MetricCard，显示部门名+日期
- [ ] 文字对比度达标

### 13.2 整体检查项

- [ ] 主题色一致性（全篇统一）
- [ ] 字体一致性
- [ ] 间距一致性（8px 倍数）
- [ ] 对齐一致性（居中为主）
- [ ] 动画流畅度
- [ ] 放映模式浮动 Logo 垂直居中正确
- [ ] 放映模式操作提示 3 秒后自动消失

---

## 十四、快速参考卡片

### 主题色板

```
┌─────────────────────────────────────────────────────────┐
│  主色 #C00000  │  辅助 #003D7A  │  成功 #00B050        │
│  ████████████  │  ████████████  │  ████████████        │
├─────────────────────────────────────────────────────────┤
│  警告 #FFA500  │  危险 #FF0000  │  信息 #2196F3        │
│  ████████████  │  ████████████  │  ████████████        │
└─────────────────────────────────────────────────────────┘
```

### 字号速查

```
H1 标题    : 64px / Bold / 主题色
H2 章节    : 32px / SemiBold / 主题色
H3 页面标题: 24px / SemiBold / 主色
Body 正文  : 16px / Regular / 主色
Caption   : 12px / Regular / 次色
```

### 间距规则

```
页面边距  : 32px
卡片内边距: 16-20px
元素间距  : 16px (md) / 24px (lg)
列表项间距: 8px
```

---

*文档版本: 2.0*
*文档类型: 通用 PPT 设计规范模板*
*生成时间: 2026-03-30*