import { Injectable } from "@angular/core";
import { prizePool } from "../mock/db";
import { Item } from "../typedefs/Item";

@Injectable({
  providedIn: "root"
})
export class RewardingService {
  constructor() {}

  lootFromChest(): Item {
    const randomIndex = Math.floor(Math.random() * prizePool.length);
    return prizePool[randomIndex];
  }
}
