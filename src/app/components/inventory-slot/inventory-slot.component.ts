import { Component, OnInit, Input } from "@angular/core";
import { Slot } from "../../typedefs/Slot";

@Component({
  selector: "app-inventory-slot",
  templateUrl: "./inventory-slot.component.html",
  styleUrls: ["./inventory-slot.component.scss"]
})
export class InventorySlotComponent implements OnInit {
  constructor() {}

  @Input()
  props: Slot;

  ngOnInit() {
    console.log(this.props);
  }
}
