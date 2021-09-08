import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  constructor(private router : Router, private actRoute: ActivatedRoute){}
  

  ngOnInit(): void {
  }

  onAddEdit(countryId : string)
  {
    this.router.navigate(['../country',countryId],{ relativeTo: this.actRoute })
  }

  onADelete(countryId : string)
  {

  }
}
