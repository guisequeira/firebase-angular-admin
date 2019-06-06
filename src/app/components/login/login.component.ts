import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  private subscriptionForm: Subscription;

  constructor( private loginService: LoginService) { }

  ngOnInit() {
    // this.formLogin.
    // this.formLogin.
    // this.subscriptionForm = this.formLogin.valueChanges.subscribe
    // this.
  }

  getErrorDisplay(): boolean {
    return this.formLogin.invalid;
  }

  getErrorMessage() {
    // console.log('message ', this.formLogin.controls.user.errors);
    return this.formLogin.controls.user.hasError('required') ? 'Preencha o campo' : '' ||
          this.formLogin.controls.user.hasError('email') ? 'Preencha email corretamente' : '';
  }

  submit(){
    console.log('submit', this.formLogin.value.user, this.formLogin.value.password);
    this.loginService.loginWithEmail(this.formLogin.value.user, this.formLogin.value.password)

  }
}
