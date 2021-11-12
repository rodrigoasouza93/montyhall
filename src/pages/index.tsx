import Link from 'next/link';
import { useState } from 'react';

import { Card } from "../components/Card";
import { NumberInput } from '../components/NumberInput';

import styles from '../styles/Home.module.css';

export default function Home() {
  const [doorsQuantity, setDoorsQuantity] = useState(3);
  const [doorWithGift, setDoorWithGift] = useState(1);

  return (
    <div className={styles.home}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput
            text="Quantidade de portas ?"
            value={doorsQuantity}
            onChange={newQuantity => setDoorsQuantity(newQuantity)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput
            text="Porta com presente ?"
            value={doorWithGift}
            onChange={newDoorWithGift => setDoorWithGift(newDoorWithGift)}
          />
        </Card>
        <Card bgColor="#28a085">
          <Link href={`/game/${doorsQuantity}/${doorWithGift}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
