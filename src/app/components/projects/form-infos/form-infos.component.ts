import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-infos',
  templateUrl: './form-infos.component.html',
  styleUrls: ['./form-infos.component.scss']
})
export class FormInfosComponent implements OnInit {

  @Input() infos: FormGroup;


  constructor() { }

  ngOnInit() {
    console.log('.. infos', this.infos);
  }

  getErrorDisplay() {
    return this.infos.invalid;
  }

  getErrorMessage() {
    return this.infos.controls.name.hasError('required') ? 'Preencha o campo' : '';
  }

}
