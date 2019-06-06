import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user$: Subscription;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState.subscribe(user => {
      console.log('login: ', user);
    })
  }

  public loginWithEmail(email, password): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(credential => {
      console.log('login success', credential);
    }).catch( error => {
      console.log('login error');
    })
  }
}
