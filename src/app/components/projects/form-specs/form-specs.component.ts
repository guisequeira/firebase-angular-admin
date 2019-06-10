import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-specs',
  templateUrl: './form-specs.component.html',
  styleUrls: ['./form-specs.component.scss']
})
export class FormSpecsComponent implements OnInit {

  @Input() specification: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
