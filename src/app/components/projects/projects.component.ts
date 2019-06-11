import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupName, Validators, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { query } from '@angular/core/src/render3';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projectList: Observable<any>;

  public projectForm = new FormGroup({
    infos: new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength(5) ]),
      title: new FormControl('', [ Validators.required]),
      slug: new FormControl('', [ Validators.required ]),
      introduction: new FormControl('', [Validators.required])
    }),
    specification: new FormGroup({
      agency: new FormControl(''),
      client: new FormControl(''),
      credit: new FormControl(''),
      role: new FormControl('')
    }),
    articles: new FormArray([])
  });

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {

    this.projectService.getAll().subscribe(res => {
      this.projectList = res.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id();
        return { id, ...data};
      });
    });
    // this.projectList = this.projectService.getAll().pipe(
    //   map(projects => projects.map( a => {
    //     const data = a.payload.doc.data();
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   }

    //   ))
    // )
    // this.projectService.getAll().subscribe(snapshot => {
    //   console.log('snapshot', snapshot);
    //   snapshot.forEach(doc => {
    //     console.log('', doc ,'=>', doc.data());
    //   });;
    //   this.projectList = snapshot.map(doc => doc.data());
    //   console.log('pro', this.projectList);
    // });
    // // this.allProjects = this.projectService.getAll();
    console.log('init :: project', this.projectForm);
  }



  public getForm(formName: string): FormControl | FormArray {
    if (formName === 'articles') {
      return this.projectForm.controls[formName] as FormArray;
    }
    return this.projectForm.controls[formName] as FormControl;
  }

  public getArticlesContent(): Array<any> {
    return this.projectForm.controls.articles.value;
  }

  public submit(): void {
    const data = this.projectForm.value;
    console.log('submit data: ', data);
    // this.projectService.createNew(data);
  }
}
