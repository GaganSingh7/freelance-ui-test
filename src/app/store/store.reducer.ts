import { ICountry } from './../models/country.interface';
import * as StoreActions from './store.actions';
import { initializeState } from './store.state';
import ActionWithPayload from './store.action.with.payload';

export function StoreReducer(state = initializeState(), action: ActionWithPayload<{region: string, countries: ICountry[]}>) {
  switch (action.type) {
    case StoreActions.GET_COUNTRIES:
      return {
        ...state,
      };
    case StoreActions.GET_COUNTRIES_SUCCESS:
      const region = state.regions.find(r => r.name === action.payload.region);
      const otherRegions = state.regions.filter(r => r.id !== region.id);
      const countries = [...action.payload.countries];
      return {
        ...state,
        regions: otherRegions.concat([{...region, countries}])
      };
    case StoreActions.GET_COUNTRIES_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
}
