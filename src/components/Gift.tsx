import styles from '../styles/Gift.module.css';

export function Gift() {
  return (
    <div className={styles.gift}>
      <div className={styles.top}></div>
      <div className={styles.body}></div>
      <div className={styles.ribbonBowOne}></div>
      <div className={styles.ribbonBowTwo}></div>
    </div>
  )
}