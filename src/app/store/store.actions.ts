import { ICountry } from './../models/country.interface';
import { IRegion } from '../models/region.interface';
import { Action } from '@ngrx/store';
import ActionWithPayload from './store.action.with.payload';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
export const GET_COUNTRIES_ERROR = 'GET_COUNTRIES_ERROR';


export class GetCountries implements Action {
    type = GET_COUNTRIES;
    constructor(public region: string) { }
}
export class GetCountriesSuccess implements ActionWithPayload<{region: string, countries: ICountry[]}> {
    type = GET_COUNTRIES_SUCCESS;
    payload: {region: string, countries: ICountry[]};

    constructor(payload) {
        this.payload = payload;
    }
}

export class GetCountriesError implements Action {
    readonly type: string;
    readonly message: string;

    constructor(type: string, message: string) {
        this.message = message;
        this.type = type;
    }
}

export type All = GetCountries | GetCountriesSuccess | GetCountriesError;


