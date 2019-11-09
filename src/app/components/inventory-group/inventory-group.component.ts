import { Component, OnInit, Input } from "@angular/core";
import { GroupName } from "../../typedefs/GroupName";
import { Slot } from "../../typedefs/Slot";
import { InventoryService } from "../../services/inventory.service";

@Component({
  selector: "app-inventory-group",
  templateUrl: "./inventory-group.component.html",
  styleUrls: ["./inventory-group.component.scss"]
})
export class InventoryGroupComponent implements OnInit {
  constructor(private inventoryService: InventoryService) {}

  @Input()
  groupName: GroupName;

  slots: Slot[] = [];

  getSlots(): void {
    this.inventoryService
      .getGroupSlots(this.groupName)
      .subscribe(slots => (this.slots = slots));
  }

  ngOnInit() {
    this.getSlots();
  }
}
