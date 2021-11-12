import { ReactElement } from 'react';
import styles from '../styles/Card.module.css';

interface CardProps {
  bgColor?: string;
  children?: ReactElement
}

export function Card({ bgColor, children }: CardProps) {
  return (
    <div className={styles.card} style={{
      background: bgColor ?? '#fff'
    }}>
      {children}
    </div>
  )
}