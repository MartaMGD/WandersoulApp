import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';
@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((restCountries) =>
        CountryMapper.mapRestCountryItemsToItemArray(restCountries)
      ),
      catchError((error) => {
        return throwError(() => new Error("Capitals couldn't be found"));
      })
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
      map((restCountries) =>
        CountryMapper.mapRestCountryItemsToItemArray(restCountries)
      ),
      delay(2000),
      catchError((error) => {
        return throwError(() => new Error("Countries couldn't be found"));
      })
    );
  }

  searchCountryById(code: string) {
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`).pipe(
      map((restCountries) => 
        CountryMapper.mapRestCountryItemsToItemArray(restCountries)
      ),
      map((countries) => countries.at(0)),
      catchError((error) => {
        return throwError(() => new Error("Countries couldn't be found"));
      })
    );
  }
}
