import { NgModule } from '@angular/core';
import { RPTravelUIComponent } from './rp-travel-ui.component';
import { SearchBoxService } from './flight-search-box/services/search-box.service';



@NgModule({
  declarations: [
    RPTravelUIComponent
  ],
  imports: [
  ],
  exports: [
    RPTravelUIComponent,
  ],
  providers:[SearchBoxService]
})
export class RPTravelUIModule { }
