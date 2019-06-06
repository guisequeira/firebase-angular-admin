import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-article-display',
  templateUrl: './article-display.component.html',
  styleUrls: ['./article-display.component.scss']
})
export class ArticleDisplayComponent implements OnInit {

  public isShowConfig = false;

  constructor() { }

  ngOnInit() {
  }

  public onShowConfig(isShow: boolean) {
    this.isShowConfig = isShow;

  }

}
