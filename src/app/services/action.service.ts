import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Item } from "../typedefs/Item";

@Injectable({
  providedIn: "root"
})
export class ActionService {
  constructor() {}

  private selectedItemSource = new BehaviorSubject<Item>(null);
  selectedItem = this.selectedItemSource.asObservable();

  selectItem(item: Item): void {
    this.selectedItemSource.next(item);
  }
}
