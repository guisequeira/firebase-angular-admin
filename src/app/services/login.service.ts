import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afAuth: AngularFireAuth) { }

  public loginWithEmail(email, password): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(credential => {
      console.log('login success', credential);
    }).catch( error => {
      console.log('login error');
    })
  }
}
