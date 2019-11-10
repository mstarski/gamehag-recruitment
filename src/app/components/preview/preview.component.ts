import { Component, OnInit } from "@angular/core";
import { ActionService } from "../../services/action.service";
import { RewardingService } from "../../services/rewarding.service";
import { InventoryService } from "../../services/inventory.service";
import { Item } from "../../typedefs/Item";

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.scss"]
})
export class PreviewComponent implements OnInit {
  constructor(
    private actionService: ActionService,
    private rewardingService: RewardingService,
    private inventoryService: InventoryService
  ) {}

  selectedItem: Item;

  closePreview(_: MouseEvent): void {
    this.actionService.clearItemSelection();
  }

  openChest(): void {
    const reward: Item = this.rewardingService.lootFromChest();
    this.inventoryService.addItem(reward);
    this.inventoryService.removeItem(this.selectedItem);

    this.actionService.clearItemSelection();
  }

  ngOnInit() {
    this.actionService.selectedItem.subscribe(
      data => (this.selectedItem = data)
    );
  }
}
