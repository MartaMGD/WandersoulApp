import { Location } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  location = Inject(Location)

  goBack() {
    this.location.back()
  }

 }
