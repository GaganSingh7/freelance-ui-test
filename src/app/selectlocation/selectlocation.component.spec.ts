import { GetCountriesSuccess } from './../store/store.actions';
import { initializeState } from './../store/store.state';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SelectlocationComponent } from './selectlocation.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { StoreReducer } from '../store/store.reducer';
import { StoreModule, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { GetCountries } from '../store/store.actions';

describe('SelectlocationComponent', () => {
  let component: SelectlocationComponent;
  let fixture: ComponentFixture<SelectlocationComponent>;
  let mockStore: MockStore<{ regions: [
    { name: 'Europe', id: 1, countries: [] },
    { name: 'Asia', id: 2, countries: [] },
  ] }>;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };
  const initialState = initializeState();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({
        store: StoreReducer
      })],
      declarations: [ SelectlocationComponent ],
      providers: [
        provideMockStore({
        selectors: [
          {
            selector: 'store',
            value: initialState
          }
        ]
      }),
      { provide: Router, useValue: router }]
    });
    mockStore = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a mock store', inject([Store], (ngxStore) => {
    expect(ngxStore).toBeTruthy();
  }));

  it('should navigate to the currect route', () => {
    component.selectedRegionName = 'Asia';
    component.selectedCountry = 'India';

    component.showCountryDetails();

    expect(router.navigate).toHaveBeenCalledWith(['country-detail'],
    { queryParams: { region: 'Asia', country: 'India' } });
  });

  it('should set selected country', () => {
    const country = 'Brazil';
    component.setSelectedCountry(country);

    expect(component.selectedCountry).toBe(country);
  });

  it('should dispatch GET_COUNTRIES action', () => {
    const dispatchSpy = spyOn(mockStore, 'dispatch');
    const region = 'Asia';

    component.regions = initialState.regions;
    component.loadCountries(region);


    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      new GetCountries(region)
    );
  });
});
