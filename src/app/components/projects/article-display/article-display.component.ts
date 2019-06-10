import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-article-display',
  templateUrl: './article-display.component.html',
  styleUrls: ['./article-display.component.scss']
})
export class ArticleDisplayComponent implements OnInit, OnChanges{

  @Input() articles: Array<any>;
  public isShowConfig = false;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('this', this.articles);
  }

  public onShowConfig(isShow: boolean) {
    this.isShowConfig = isShow;

  }

}
