import { CountrydetailComponent } from './countrydetail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        component: CountrydetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ],
})

export class CountrydetailRoutingModule { }
