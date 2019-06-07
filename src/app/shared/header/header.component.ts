import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: User;

  constructor(public loginService: LoginService) { }

  ngOnInit() {
    this.loginService.user$.subscribe( user => {
      this.user = user;
      console.log('user ', this.user);
    });
    console.log('user header', this.loginService.user$);
  }

}
