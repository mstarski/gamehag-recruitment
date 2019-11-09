import { Component, OnInit } from "@angular/core";
import { InventoryService } from "../../services/inventory.service";
import { GroupName } from "../../typedefs/GroupName";

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.scss"]
})
export class InventoryComponent implements OnInit {
  constructor(private inventoryService: InventoryService) {}

  groups: GroupName[] = [];

  getGroups(): void {
    this.inventoryService
      .getGroupNames()
      .subscribe(groupNames => (this.groups = groupNames));
  }

  ngOnInit() {
    this.getGroups();
  }
}
