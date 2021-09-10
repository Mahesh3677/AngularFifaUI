import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country.model';


@Injectable()
export class CountryService{
constructor(private http : HttpClient){}



GetCountries()
{
   return this.http.get<Country[]>(environment.baseUrl +'countries')
}
}