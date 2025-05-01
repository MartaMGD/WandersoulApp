import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { NotFoundComponent } from "../../../shared/components/footer/not-found/not-found.component";
import { CountryInfoComponent } from "./country-info/country-info.component";

@Component({
  selector: 'country-page',
  imports: [NotFoundComponent, CountryInfoComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {
  countryCode = inject(ActivatedRoute).snapshot.params['id'];
  countryService = inject(CountryService);

  countryResource = rxResource({
    request: () => ({
      id: this.countryCode,
    }),
    loader: ({ request }) => {
      return this.countryService.searchCountryById(request.id);
    },
  });
}
