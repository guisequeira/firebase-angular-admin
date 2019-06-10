import { Injectable } from '@angular/core';
// import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { log } from 'util';
import { map } from 'rxjs/operators';

const DB_PATH = 'job';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectColletction: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) { }

  public getAll(): Observable<any> {
    this.projectColletction = this.afs.collection(DB_PATH);
    console.log('colle', this.projectColletction);
    return this.projectColletction.get()
  }

  public createNew(projectData: any): void {
    this.afs.collection(DB_PATH).add(projectData).then(res => {
      console.log('res', res);
    }).catch(err => {
      console.log('err', err);
    })
  }

}
