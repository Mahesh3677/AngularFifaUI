import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggeduser : user;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
  
    this.userService.autoRefresh();
    this.userService.user.subscribe(
      user =>
      {
        this.loggeduser = user;
      }
    )
  }


  logout()
  {
    this.userService.logout()
  }
}
