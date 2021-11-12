import styles from '../styles/NumberInput.module.css';

interface NumberInputProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

export function NumberInput({ text, value, onChange }: NumberInputProps) {
  const decrement = () => onChange(value - 1);

  const increment = () => onChange(value + 1);

  return (
    <div className={styles.numberInput}>
      <span className={styles.text}>{text}</span>
      <span className={styles.value}>{value}</span>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={decrement}>-</button>
        <button className={styles.button} onClick={increment}>+</button>
      </div>
    </div>
  )
}