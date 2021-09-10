import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/shared/models/country.model';
import { CountryService } from 'src/app/shared/services/country.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  constructor(private router : Router, private actRoute: ActivatedRoute 
               ,private countryService : CountryService){}
  
countries : Country[];

  ngOnInit(): void {
    this.BindAllCountries()
  }

  BindAllCountries()
  {
    this.countryService.GetCountries().subscribe((data: any[])=>{
      console.log(data);
      this.countries = data;
    })  
  }

  onAddEdit(countryId : string)
  {
    console.log(countryId)
    this.router.navigate(['../country',countryId],{ relativeTo: this.actRoute })
  }

  onADelete(countryId : string)
  {

  }
}
