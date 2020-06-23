import { ICountry } from './country.interface';

export interface IRegion {
    id: number;
    name: string;
    countries: ICountry[];
}
