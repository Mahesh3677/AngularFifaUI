import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/shared/models/user.model';
import { AdminService } from 'src/app/shared/services/admin.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
loggeduser : user;
  constructor(private adminService : AdminService , private userService : UserService) { }

  ngOnInit(): void {
  
    this.userService.autoRefresh();
    this.userService.user.subscribe(
      user =>
      {
        this.loggeduser = user;
      }
    )
  }

}
