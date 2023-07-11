export interface currencyModel {
    ID:number,
    Currency_Code:string,
    Currency_Name:string,
    Is_Base_Currency:boolean,
    Image_Url:string,
    rate : number
 }

 export interface pointOfSaleModel { 
    ip?:string,
    city?:string,
    region?:string,
    region_code?:string,
    country?:string,
    country_name?:string,
    country_nameAr?:string,
    continent_code?:string,
    airport?:string
    country_capital?:string,
    in_eu?:boolean,
    postal?:any,
    latitude?:number,
    longitude?:number,
    timezone?:string,
    utc_offset?:string,
    country_calling_code?:string,
    currency?:string,
    languages?:string,
    asn?:string,
    org?:string
}

export interface airPorts {
    airportCode:string,
    airportName:string,
    cityName:string,
    cityCode:string,
    countryCode:string,
    countryName:string,
    regionName:string
}

export interface countries {
    pseudoCountryCode:string,
    countryName:string,
    regionName:string,
    phoneCode:any
}

export interface hotelCities {
     CityId: number,
     City: string,
     Country: string,
     CityWithCountry: string,
     CountryCode:string
}


export interface topCityFlight {
    id: number,
    distination: string,
    distinationAr:string,
    airportCode: string,
    price: number,
    currencyCode: string,
    tag: string,
    tagAr:string
    flightType: string,
    imageURL: string,
    tripIdeas: boolean
}

export interface tripideas {
    tripIdea:string,
    tribIdeaAr:string,
    trips:topCityFlight[]
}