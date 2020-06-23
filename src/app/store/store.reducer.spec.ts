import { IRegion } from './../models/region.interface';
import { ICountry } from './../models/country.interface';
import { initializeState } from './store.state';
import { StoreReducer } from './store.reducer';
import ActionWithPayload from './store.action.with.payload';
const intialState = initializeState();

describe('default', () => {
  const defaultAction: ActionWithPayload<{
    region: string;
    countries: ICountry[];
  }> = {
    type: 'INIT_STATE',
    payload: {
      region: '',
      countries: [],
    },
  };
  const errorAction: ActionWithPayload<{
    region: string;
    countries: ICountry[];
  }> = {
    type: 'GET_COUNTRIES_ERROR',
    payload: {
      region: '',
      countries: [],
    },
  };
  const loadDataSuccessAction: ActionWithPayload<{
    region: string;
    countries: ICountry[];
  }> = {
    type: 'GET_COUNTRIES_SUCCESS',
    payload: {
      region: 'Asia',
      countries: [
        {
            name: 'China',
            capital: 'Bejeing',
            currencies: [{code: 'Renminbi'}],
            population: '12123423123',
            flag: 'test2'
          }
      ],
    },
  };
  const alreadyLoadedAction: ActionWithPayload<{
    region: string;
    countries: ICountry[];
  }> = {
    type: 'GET_COUNTRIES',
    payload: {
      region: 'Asia',
      countries: [
          {
            name: 'India',
            capital: 'New Delhi',
            currencies: [{code: 'INR'}],
            population: '12123423',
            flag: 'test'
          }
        ]
    },
  };

  it('should return initial state if no action type provided', () => {
    const initState = StoreReducer(intialState, defaultAction);

    expect(initState).toBe(intialState);
  });

  it('should return initial state if error occurs', () => {
    const initState = StoreReducer(intialState, errorAction);

    expect(initState).toBe(intialState);
  });

  it('should return the current state if dropdown data is already loaded', () => {
    const initState = StoreReducer(intialState, alreadyLoadedAction);

    expect(initState).toBe(intialState);
  });

  it('should set and return the new state if dropdown data is not already loaded', () => {
    const initState = StoreReducer(intialState, loadDataSuccessAction);

    expect(initState).toBe(intialState);
  });
});
