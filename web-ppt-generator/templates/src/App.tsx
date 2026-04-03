import { useState } from 'react'
import { usePresentation } from './hooks/usePresentation'
import CoverSlide from './components/slides/CoverSlide'
import TOCSlide from './components/slides/TOCSlide'
import ContentSlide from './components/slides/ContentSlide'
import SummarySlide from './components/slides/SummarySlide'
import type { SlideData } from './types'

// ===========================
// 数据在此处填写（示例数据）
// ===========================
const slideData: SlideData = {
  cover: {
    title: '季度工作汇报',
    subtitle: '2024年 Q1',
    date: '2024年3月',
    department: 'XX部门',
    backgroundImage: '/background.jpeg',
  },
  toc: {
    items: ['总览', '关键成果', '存在问题', '下季度计划'],
  },
  sections: [
    {
      id: 'overview',
      title: '总览',
      content: {
        metrics: [
          { label: '总投入', value: '1500万', trend: '↑15%', status: 'normal' },
          { label: '项目数', value: '156个', trend: '↑12%', status: 'normal' },
          { label: '完成率', value: '85%', trend: '正常', status: 'normal' },
          { label: '复用率', value: '72%', trend: '达标', status: 'success' },
        ],
      },
    },
    {
      id: 'achievements',
      title: '关键成果',
      content: {
        text: '本季度完成XX系统上线，覆盖XX用户...',
      },
    },
    {
      id: 'issues',
      title: '存在问题',
      content: {
        text: '资源协调仍存在瓶颈，部分项目进度滞后...',
      },
    },
    {
      id: 'plan',
      title: '下季度计划',
      content: {
        text: '重点推进XX项目，优化资源分配机制...',
      },
    },
  ],
  summary: {
    keyPoints: ['成果显著', '问题可控', '计划清晰'],
    nextFocus: '资源协调与项目交付',
  },
}
// ===========================

const slides = [
  <CoverSlide key="cover" data={slideData.cover} />,
  <TOCSlide key="toc" data={slideData.toc} />,
  ...slideData.sections.map((section) => (
    <ContentSlide key={section.id} section={section} />
  )),
  <SummarySlide key="summary" data={slideData.summary} />,
]

export default function App() {
  const [editing, setEditing] = useState(true)
  const { currentIndex, isPresentationMode, nextSlide, prevSlide, togglePresentationMode, handleClick } =
    usePresentation({ totalPages: slides.length })

  return (
    <div
      className={`app${isPresentationMode ? ' presentation-mode' : ''}`}
      onClick={handleClick}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="slide-wrapper">{slides[currentIndex]}</div>

      {editing && (
        <div className="toolbar">
          <span>
            {currentIndex + 1} / {slides.length}
          </span>
          <button onClick={(e) => { e.stopPropagation(); prevSlide() }}>←</button>
          <button onClick={(e) => { e.stopPropagation(); nextSlide() }}>→</button>
          <button onClick={(e) => { e.stopPropagation(); togglePresentationMode() }}>
            放映
          </button>
          <button onClick={(e) => { e.stopPropagation(); setEditing(false) }}>
            隐藏工具栏
          </button>
        </div>
      )}

      {!editing && (
        <button
          className="toolbar-toggle"
          onClick={(e) => { e.stopPropagation(); setEditing(true) }}
        >
          ☰
        </button>
      )}
    </div>
  )
}
