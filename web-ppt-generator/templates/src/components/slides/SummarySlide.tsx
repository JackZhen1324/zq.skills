import type { SummaryData } from '../../types'
import styles from './SummarySlide.module.scss'

export default function SummarySlide({ data }: { data: SummaryData }) {
  return (
    <div className={styles.slide}>
      <div className={styles.header}>
        <span className={styles.number}>0X</span>
        <h2 className={styles.title}>总结</h2>
      </div>
      <div className={styles.divider}><img src="/divider.jpeg" alt="" /></div>
      <div className={styles.content}>
        <div className={styles.points}>
          {data.keyPoints.map((p, i) => (
            <div key={i} className={styles.point}>✅ {p}</div>
          ))}
        </div>
        {data.nextFocus && (
          <div className={styles.nextFocus}>
            <strong>下阶段重点：</strong>{data.nextFocus}
          </div>
        )}
      </div>
    </div>
  )
}
