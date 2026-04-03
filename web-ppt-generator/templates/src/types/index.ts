export interface MetricItem {
  label: string
  value: string
  trend?: string
  status?: 'normal' | 'success' | 'warning' | 'danger'
}

export interface CoverData {
  title: string
  subtitle?: string
  date?: string
  department?: string
  backgroundImage?: string
}

export interface TOCData {
  items: string[]
}

export interface SectionContent {
  metrics?: MetricItem[]
  table?: {
    headers: string[]
    rows: (string | number)[][]
    highlights?: { row: number; col: number; status: 'success' | 'warning' | 'danger' }[]
  }
  text?: string
  list?: string[]
  chart?: Record<string, unknown>
}

export interface Section {
  id: string
  title: string
  content: SectionContent
}

export interface SummaryData {
  keyPoints: string[]
  nextFocus?: string
}

export interface SlideData {
  cover: CoverData
  toc: TOCData
  sections: Section[]
  summary: SummaryData
}
