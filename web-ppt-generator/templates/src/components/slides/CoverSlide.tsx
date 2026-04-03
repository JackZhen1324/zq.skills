import type { CoverData } from '../../types'
import styles from './CoverSlide.module.scss'

export default function CoverSlide({ data }: { data: CoverData }) {
  return (
    <div
      className={styles.cover}
      style={data.backgroundImage ? { background: `url(${data.backgroundImage})` } : undefined}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>{data.title}</h1>
        {data.subtitle && <p className={styles.subtitle}>{data.subtitle}</p>}
        <div className={styles.meta}>
          {data.department && <span>{data.department}</span>}
          {data.department && data.date && <span>·</span>}
          {data.date && <span>{data.date}</span>}
        </div>
      </div>
    </div>
  )
}
