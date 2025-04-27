import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountryLayoutPageComponent } from './layouts/country-layout-page/country-layout-page.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutPageComponent,
    children: [
      {
        path: "by-capital",
        component: ByCapitalPageComponent
      },
      {
        path: "by-country",
        component: ByCountryPageComponent
      },
      {
        path: "by-region",
        component: ByRegionComponent
      },
      {
        path: "by-capital",
        redirectTo: ""
      },
      {
        path:"by/:id",
        component: CountryPageComponent
      }
    ]
  },
];

export default countryRoutes