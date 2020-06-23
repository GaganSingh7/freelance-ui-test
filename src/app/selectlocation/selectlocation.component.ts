import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IRegion } from '../models/region.interface';
import { ICountry } from '../models/country.interface';
import { GetCountries } from '../store/store.actions';

@Component({
  selector: 'app-selectlocation',
  templateUrl: './selectlocation.component.html',
  styleUrls: ['./selectlocation.component.scss']
})
export class SelectlocationComponent implements OnInit {
  selectedRegionName = null;
  selectedCountry = null;
  store$: Observable<{regions: IRegion[]}>;
  regions: IRegion[];
  countries: ICountry[];

  constructor(private store: Store<{store: {regions: IRegion[]}}>,
              private router: Router) {
  }
  ngOnInit() {
   this.store$ = this.store.select('store');
   this.store$.subscribe(store => {
    this.regions = store.regions;
    this.fetchSelectedRegionCountries();
   });
  }

  loadCountries(region) {
    // check if region's countries are already loaded, if not load them
    this.selectedRegionName = region;
    const selectedRegion = this.regions.find(r => r.name === region);
    if (selectedRegion.countries && selectedRegion.countries.length) {
      this.fetchSelectedRegionCountries();
    } else {
      this.store.dispatch(new GetCountries(region));
    }
  }

  setSelectedCountry(country) {
    this.selectedCountry = country;
  }

  fetchSelectedRegionCountries() {
    const selectedRegion = this.regions.find(r => r.name === this.selectedRegionName) || null;
    if (selectedRegion) {
      this.countries = this.regions.find(i => i.id === selectedRegion.id).countries;
    }
  }

  showCountryDetails() {
    this.router.navigate(['country-detail'], { queryParams: { region: this.selectedRegionName, country: this.selectedCountry } });
  }

}
