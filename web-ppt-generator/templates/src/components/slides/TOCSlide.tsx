import type { TOCData } from '../../types'
import styles from './TOCSlide.module.scss'

export default function TOCSlide({ data }: { data: TOCData }) {
  return (
    <div className={styles.toc}>
      <div className={styles.header}>
        <span className={styles.number}>01</span>
        <h2 className={styles.title}>目录</h2>
      </div>
      <div className={styles.divider}>
        <img src="/divider.jpeg" alt="" />
      </div>
      <div className={styles.content}>
        <ul className={styles.list}>
          {data.items.map((item, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.text}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
