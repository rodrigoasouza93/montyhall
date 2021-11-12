import { DoorModel } from "../model/door";

export function createDoors(quantity: number, withGiftDoor: number): DoorModel[] {
  return Array.from({ length: quantity }, (_, i) => {
    const number = i + 1;
    const hasGift = number === withGiftDoor;
    return new DoorModel(number, hasGift);
  })
}

export function updateDoors(doors: DoorModel[], modifiedDoor: DoorModel): DoorModel[] {
  return doors.map(door => {
    const isEqualToModifiedDoor = door.number === modifiedDoor.number;

    if (isEqualToModifiedDoor) {
      return modifiedDoor;
    }

    return modifiedDoor.isOpen ? door : door.deselect();
  });
}