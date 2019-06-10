import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.scss']
})
export class FormArticleComponent implements OnInit {

  @Input() articles: FormArray;

  public article: FormGroup;

  public articleTypeSelect = {type: 'paragraph'};

  constructor() { }

  ngOnInit() {
    this.article = this.createNewArticleForm();
  }

  private createNewArticleForm(): FormGroup {
    return  new FormGroup({
      type: new FormControl(this.articleTypeSelect.type, [Validators.required]),
      subtitle: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl('caminho_da_imagem.png')
    });
  }

  public submit() {
    this.articles.push(this.article);
    this.article = this.createNewArticleForm();

  }
}
