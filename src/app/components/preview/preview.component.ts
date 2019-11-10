import { Component, OnInit } from "@angular/core";
import { ActionService } from "../../services/action.service";
import { Item } from "../../typedefs/Item";

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.scss"]
})
export class PreviewComponent implements OnInit {
  constructor(private actionService: ActionService) {}

  selectedItem: Item;

  ngOnInit() {
    this.actionService.selectedItem.subscribe(
      data => (this.selectedItem = data)
    );
  }
}
