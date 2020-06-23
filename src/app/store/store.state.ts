import { IRegion } from './../models/region.interface';
const initialState = {
    regions: [
      { name: 'Europe', id: 1, countries: [] },
      { name: 'Asia', id: 2, countries: [] },
    ]
  };

export interface StoreState {
   regions: IRegion[];
}

export const initializeState = (): StoreState => {
    return initialState;
};
