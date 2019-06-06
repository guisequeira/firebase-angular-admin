import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupName, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

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
    })
  });

  constructor() {
    console.log('project', this.projectForm);

   }

  ngOnInit() {
    console.log('project', this.projectForm);
    this.projectForm.controls.infos.valueChanges.subscribe( name => {
      console.log('... name', name);
    });
  }

  getFormInfos(): FormControl {
    return this.projectForm.controls.infos as FormControl;
  }

}
