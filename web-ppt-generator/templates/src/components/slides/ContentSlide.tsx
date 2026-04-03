import type { Section } from '../../types'
import styles from './ContentSlide.module.scss'

function MetricCard({ label, value, trend, status }: {
  label: string; value: string; trend?: string; status?: string
}) {
  const statusClass = status ? styles[`status_${status}`] : ''
  return (
    <div className={`${styles.card} ${statusClass}`}>
      <div className={styles.cardValue}>{value}</div>
      <div className={styles.cardLabel}>{label}</div>
      {trend && <div className={styles.cardTrend}>{trend}</div>}
    </div>
  )
}

export default function ContentSlide({ section }: { section: Section }) {
  return (
    <div className={styles.slide}>
      <div className={styles.header}>
        <span className={styles.number}>0{section.id === 'overview' ? 2 : section.id === 'achievements' ? 3 : section.id === 'issues' ? 4 : 5}</span>
        <h2 className={styles.title}>{section.title}</h2>
      </div>
      <div className={styles.divider}><img src="/divider.jpeg" alt="" /></div>
      <div className={styles.content}>
        {section.content.metrics && (
          <div className={styles.metrics}>
            {section.content.metrics.map((m, i) => (
              <MetricCard key={i} {...m} />
            ))}
          </div>
        )}
        {section.content.text && (
          <div className={styles.textBlock}>
            <p>{section.content.text}</p>
          </div>
        )}
        {section.content.list && (
          <ul className={styles.list}>
            {section.content.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
