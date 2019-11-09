import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { db } from "../mock/db";
import { Slot } from "../typedefs/Slot";
import { GroupName } from "../typedefs/GroupName";
import { Item } from "../typedefs/Item";

@Injectable({
  providedIn: "root"
})
export class InventoryService {
  constructor() {}

  getGroupNames(): Observable<GroupName[]> {
    return of(db.map(group => group.name));
  }

  getGroupSlots(groupName: GroupName): Observable<Slot[]> {
    return of(db.find(group => group.name === groupName).slots);
  }

  addItem(groupName: GroupName, item: Item): void {
    if (item.group !== groupName)
      throw new Error("Target group's name doesn't match item's group name.");

    const groupIndex = db.findIndex(group => group.name === groupName);
    const freeSlotIndex = db[groupIndex].slots.findIndex(
      slot => slot.item === null
    );
    if (freeSlotIndex !== -1) {
      db[groupIndex].slots[freeSlotIndex].item = item;
    }
    console.info("Succesfully addedd an item: " + item.name);
  }

  removeItem(item: Item): void {
    const groupIndex = db.findIndex(group => group.name === item.group);
    const itemIndex = db[groupIndex].slots.findIndex(
      slot => slot.item.id === item.id
    );

    db[groupIndex].slots[itemIndex].item = null;
    console.info("Succesfully removed an item: " + item.name);
  }
}
