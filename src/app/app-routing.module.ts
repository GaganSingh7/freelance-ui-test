import { SelectlocationComponent } from './selectlocation/selectlocation.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'country-detail',
        loadChildren: () => import('./countrydetail/countrydetail.module').then(m => m.CountrydetailModule)
    },
    {
        path: '**',
        component: SelectlocationComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule { }
