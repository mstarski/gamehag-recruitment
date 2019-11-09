import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { PreviewComponent } from './components/preview/preview.component';
import { InventoryGroupComponent } from './components/inventory-group/inventory-group.component';
import { InventorySlotComponent } from './components/inventory-slot/inventory-slot.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    PreviewComponent,
    InventoryGroupComponent,
    InventorySlotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
