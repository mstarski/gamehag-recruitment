import { Component, OnInit, Input } from "@angular/core";
import { Slot } from "../../typedefs/Slot";
import { ActionService } from "../../services/action.service";
import { Item } from "../../typedefs/Item";

@Component({
  selector: "app-inventory-slot",
  templateUrl: "./inventory-slot.component.html",
  styleUrls: ["./inventory-slot.component.scss"]
})
export class InventorySlotComponent implements OnInit {
  constructor(private actionService: ActionService) {}

  @Input()
  props: Slot;

  isSelected: boolean = false;

  selectSlot(_: MouseEvent, data: Item): void {
    this.actionService.selectItem(data);
  }

  ngOnInit() {
    this.actionService.selectedItem.subscribe(selectedItem => {
      this.isSelected =
        this.props.item &&
        selectedItem &&
        selectedItem.id === this.props.item.id;
    });
  }
}
