import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private userService : UserService){}
  title = 'FifaUI';

  ngOnInit()
  {
    this.userService.autoLogin();
  }
}
