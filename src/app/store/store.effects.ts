import { ICountry } from './../models/country.interface';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { GET_COUNTRIES, GetCountries, GetCountriesSuccess, GetCountriesError, GET_COUNTRIES_ERROR } from './store.actions';

@Injectable()
export class StoreEffects {
  apiURL = 'https://restcountries.eu/rest/v2/region/';
  region: string;
  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect()
  getCountries$ = this.actions$.pipe(ofType<GetCountries>(GET_COUNTRIES),
    mergeMap(action => {
      this.region = action.region;
      return this.http.get(this.apiURL + this.region).pipe(
        map((countries: ICountry[]) => {
          return new GetCountriesSuccess({region: this.region, countries });
        }),
        catchError(error => {
          return of(new GetCountriesError(GET_COUNTRIES_ERROR, error.message));
        })
      );
    }
    )
  );

}
