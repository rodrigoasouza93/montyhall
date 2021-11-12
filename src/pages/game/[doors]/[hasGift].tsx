import { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Door } from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/doors";

import styles from '../../../styles/Game.module.css';
import { DoorModel } from "../../../model/door";

export default function Game() {
  const router = useRouter();
  const [doors, setDoors] = useState<DoorModel[]>([]);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const doors = +router.query.doors;
    const hasGift = +router.query.hasGift;
    setDoors(createDoors(doors, hasGift))
  }, [router.query]);

  useEffect(() => {
    const doors = +router.query.doors;
    const hasGift = +router.query.hasGift;

    const validDoorsQuantity = doors >= 3 && doors <= 100;
    const validDoorWithGift = hasGift >= 1 && hasGift <= doors;

    setValid(validDoorsQuantity && validDoorWithGift);
  }, [doors, router.query.doors, router.query.hasGift]);

  const renderDoors = () => {
    return valid && doors.map(door => (
      <Door
        key={door.number}
        door={door}
        onChange={newDoor => setDoors(updateDoors(doors, newDoor))}
      />
    ));
  }

  return (
    <div className={styles.game}>
      <div className={styles.doors}>
        {valid ?
          renderDoors() :
          <h1>Valores inválidos</h1>
        }
      </div>
      <div className={styles.buttons}>
       <Link href="/" passHref>
         <button>Reiniciar jogo</button>
       </Link>
      </div>
    </div>
  )
}