import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.scss']
})
export class FormArticleComponent implements OnInit {

  public favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  public articleTypeSelect = {type: 'paragraph'};

  constructor() { }

  ngOnInit() {
  }

}
