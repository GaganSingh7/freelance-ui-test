import { initializeState } from './../store/store.state';
import { Store, StoreModule } from '@ngrx/store';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CountrydetailComponent } from './countrydetail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { StoreReducer } from '../store/store.reducer';

describe('CountrydetailComponent', () => {
  let component: CountrydetailComponent;
  let fixture: ComponentFixture<CountrydetailComponent>;
  let mockStore: MockStore<{ regions: [
    { name: 'Europe', id: 1, countries: [] },
    { name: 'Asia', id: 2, countries: [] },
  ] }>;
  let initialState = initializeState();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({
        store: StoreReducer
      })],
      declarations: [CountrydetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { queryParams: of({ region: 'Asia', country: 'India' }) } },
        provideMockStore({
          selectors: [
            {
              selector: 'store',
              value: initialState
            }
          ]
        })
      ],
    });
    mockStore = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrydetailComponent);
    component = fixture.componentInstance;
  });

  it('should create a mock store', inject([Store], (ngxStore) => {
    expect(ngxStore).toBeTruthy();
  }));

  it('should create country detail component', () => {
    expect(component).toBeTruthy();
  });

  it('should return empty object', () => {
    initialState = { regions: [] };
    component.ngOnInit();
    expect(component.country).toBeFalsy();
  });
});
