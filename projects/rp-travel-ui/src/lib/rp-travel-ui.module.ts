import { NgModule } from '@angular/core';
import { RPTravelUIComponent } from './rp-travel-ui.component';
import { SearchBoxService } from './flight-search-box/services/search-box.service';
import { HomeApiService } from './home-page/services/home-api.service';
import { UserApiService } from './user-managment/services/user-api.service';
import { HttpClientModule } from '@angular/common/http';
import { RPTravelUIService } from './rp-travel-ui.service';
import { EnvironmentService } from './shared/services/environment.service';
import { FlightSearchBoxApiService } from './flight-search-box/services/flight-search-box-api.service';
import { FlightCheckoutApiService } from './flight-checkout/services/flight-checkout-api.service';


@NgModule({
  declarations: [
    RPTravelUIComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
  ],
  providers:[
    SearchBoxService,
    RPTravelUIService,
    EnvironmentService,
    HomeApiService,
    UserApiService,
    FlightSearchBoxApiService,
    FlightCheckoutApiService
  ]
})
export class RPTravelUIModule { }
