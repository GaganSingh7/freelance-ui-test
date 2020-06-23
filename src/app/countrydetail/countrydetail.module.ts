import { CountrydetailRoutingModule } from './countrdetail.routing.module';
import { CountrydetailComponent } from './countrydetail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [
        CommonModule,
        CountrydetailRoutingModule
    ],
    declarations: [CountrydetailComponent]
})
export class CountrydetailModule { }
