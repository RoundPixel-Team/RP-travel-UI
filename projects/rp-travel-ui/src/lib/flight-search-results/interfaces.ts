export interface baseSearchresult {
    status: string;
    searchResultException:{code:string,exceptionMessage:string}
}
  
export interface FlightSearchResult extends baseSearchresult {
    airlines: any[];
    airItineraries: airItineraries[];
    searchCriteria: searchCriteria;
    cabinClasses:string[]
}

export interface searchCriteria {
    adultNum: number;
    childNum: number;
    currency: string;
    flights: searchCriteriaFlights[];
    flightType: string;
    infantNum: string;
    language: string;
    pos: string;
    preferredAirline: any;
    searchId: string;
    selectDirectFlightsOnly: boolean;
    selectedFlightClass: string;
    source: string;
    totalPassengersNum: number;
}

export interface searchCriteriaFlights{
    arrivingTo: string;
    departingFrom: string;
    departingOnDate: string;
}


export interface airItineraries {
    referralLink?:string; 
    otaName?:string;
    providerLogo?:string;
    pKey?: number;
    flightSignature?:string;
    overNight?:number;
    stopsTime?:number;
    experiance?:number;
    sequenceNum: number;
    isRefundable: boolean;
    itinTotalFare: itinTotalFare;
    totalDuration: number;
    deptDate: string;
    arrivalDate: string;
    cabinClass: string;
    flightType: string;
    allJourney: {
      flights: flight[];
    };
    baggageInformation: baggageInformation[];
    searchCriteria?:searchCriteria;
    passengerFareBreakDownDTOs?:passengerFareBreakDownDTOs[]
  }

export interface itinTotalFare {
    amount : number
    fareAmount? : number
    promoCode? : string
    promoDiscount? : number
    currencyCode : string
    totalTaxes : number
}

export interface flight {
    flightDTO?: FlightDTO[];
    elapsedTime: number;
    stopsNum: number;
    flightAirline?:FlightAirline
  }

export interface FlightDTO {
    transitPosition?:string;
    transitWidth?:number;
    sequenceNum?: number;
    isStopSegment: boolean;
    deptTime: any;
    landTime: any;
    departureDate: string;
    arrivalDate: string;
    flightAirline: {
      airlineCode: string;
      airlineName: string;
      airlineLogo: string;
      alternativeBusinessName: string;
      languageCode: string;
      passportDetailsRequired: boolean;
    };
    operatedAirline: {
      airlineCode: string;
      airlineName: string;
      airlineLogo: string;
      alternativeBusinessName: string;
      languageCode: string;
      passportDetailsRequired: boolean;
    };
    durationPerLeg: number;
    departureTerminalAirport: {
      airportCode: string;
      airportName: string;
      cityName: string;
      cityCode: string;
      countryCode: string;
      countryName: string;
      regionName: string;
    };
    arrivalTerminalAirport: {
      airportCode: string;
      airportName: string;
      cityName: string;
      cityCode: string;
      countryCode: string;
      countryName: string;
      regionName: string;
    };
    transitTime: string;
    flightInfo: {
      flightNumber: string;
      equipmentNumber: string;
      mealCode: string;
      bookingCode: string;
      cabinClass: string;
    };
    segmentDetails: {
      uniqueKey: any;
      baggage: string;
      childBaggage: any;
      infantBaggage: any;
    };
}

  
export interface FlightAirline{
    airlineCode: string
    airlineLogo: string
    airlineName: string
    alternativeBusinessName: string
    passportDetailsRequired: boolean
}

export interface baggageInformation {
    baggage: string;
    childBaggage: string;
    infantBaggage: string;
    airlineName: string;
    deptCity: string;
    landCity: string;
    flightNum: string;
}

export interface passengerFareBreakDownDTOs{
    key:string,
    cancelPenaltyDTOs:Penelty[],
    changePenaltyDTOs:Penelty[],
    passengerQuantity:number,
    passengersRef:any[],
    pricingMethod:string,
    passengerType:string,
    flightFaresDTOs:fare[],
    taxes:taxes[]
}

  export interface Penelty {
    curency:string,
    percentage:number,
    price:number
}
  export interface fare {
    currencyCode:string,
    fareAmount:number,
    fareType:string
}
  export interface taxes {
    amount:number,
    contentl:string,
    countryCode?:string | null,
    taxCode:string,
    taxCurrencyCode:string,
    taxName?:string | null
}