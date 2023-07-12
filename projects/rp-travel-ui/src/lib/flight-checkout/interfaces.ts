import { airItineraries, searchCriteria } from "../flight-search-results/interfaces";


/**
 * this model is mappping to the get selected flight response
 */
export interface selectedFlight {
    airItineraryDTO:airItineraries
    status: string
    searchCriteria:searchCriteria
    passportDetailsRequired:boolean
}

/**
 * this model is mappping to flight offline service response
 */
export interface flightOfflineService {
    currency: string,
    servicePrice: number,
    serviceCode: string,
    serviceName: string,
    serviceDescription: string,
    pslacement: string,
    pos:string [],
    offlineServiceImageUrl: string,
    oflineServiceIconUrl: string,
    offlineServiceTerms: string,
    serviceNameAr: string,
    serviceDescriptionAr: string,
    offlineServiceTermsAr: string,
    recommended: boolean,
    perPassenger: boolean,
    added?: boolean;
}