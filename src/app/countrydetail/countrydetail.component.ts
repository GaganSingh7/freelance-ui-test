import { IRegion } from './../models/region.interface';
import { ICountry } from './../models/country.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.scss']
})
export class CountrydetailComponent implements OnInit {
  location: {region: string, country: string};
  country: ICountry;
  currencies: string;
  constructor(private route: ActivatedRoute,
              private store: Store<{store: {regions: IRegion[]}}>) { }

  ngOnInit() {
    this.route.queryParams.pipe(map(params => {
      return {region: params.region, country: params.country};
    }),
    switchMap(state => {
      this.location = state;
      return this.store.select('store');
    }),
    map(store => {
      const region = store.regions.find((reg: IRegion) => reg.name === this.location.region);
      if (region) {
        return region.countries.find((country: ICountry) => country.name === this.location.country);
      } else {
        return {};
      }
    })
    ).subscribe((country: ICountry) => {
      this.country = country;
      this.currencies = this.country && this.country.currencies.map((i: any) => i.code).toString();
    });
  }

}
