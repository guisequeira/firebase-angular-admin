import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subscription, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  public loginWithEmail(email, password): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(credential => {
      console.log('login success', credential);
    }).catch(error => {
      console.log('login error');
    });
  }

  public logout(): void {
    this.afAuth.auth.signOut();
  }
}
