import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
    offlineSeats ='http://178.63.214.219:7025'
    searchflow =  'https://flightsearch.rhlaty.com'
    BookingFlow = 'https://flightflow.rhlaty.com'
    FareRules =   'https://flightprov.rhlaty.com'
    asm =         'https://backofficeapi.rhlaty.com'
    Apihotels =   'https://hotels.rhlatycom'
    hotelprepay = 'https://prepayapi.rhlaty.com'
    users =       'https://usersapi.rhlaty.com'
    admin =       'https://adminapi.rhlaty.com/'
    getDPayment = 'https://adminapi.rhlaty.com/'
    bookHotels =  'https://hotels.rhlaty.com'
    hotelPrepay = 'https://prepayapi.rhlaty.com'
    backOffice =  'https://backofficeapi.rhlaty.com'
    FlightTop =   'https://flightsearch.rhlaty.com'
    offers= {
      getAll:     'http://41.215.243.36:7893/api/GetAllOffersAPI?POS=',
      getByID:    'http://41.215.243.36:7893/api/GetOfferByIdAPI?OfferId=',
      BookOffer:  'http://41.215.243.36:7895/api/BookOffer',
      RetriveItineraryDetails:'/api/Admin/RetriveItineraryDetails'
    }

  constructor() { }
}
