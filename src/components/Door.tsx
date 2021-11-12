import { DoorModel } from '../model/door';
import { Gift } from './Gift';
import styles from '../styles/Door.module.css';

interface DoorProps {
  door: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export function Door({ door, onChange }: DoorProps) {
  const selected = door.selected && !door.isOpen ? styles.selected : '';

  const toggleSelect = () => onChange(door.toggleSelect());
  const open = (e) => {
    e.stopPropagation();
    onChange(door.open())
  };

  const renderDoor = () => (
    <div className={styles.door}>
      <div className={styles.number}>
        {door.number}
      </div>
      <div className={styles.knob} onClick={open}>
      </div>
    </div>
  )

  return (
    <div className={styles.area} onClick={toggleSelect}>
      <div className={`${styles.structure} ${selected}`}>
        {door.isClosed ?
          renderDoor() :
          door.hasGift ? <Gift /> : false
        }
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}