import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Article, { DB } from 'src/app/utils/articlesList';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  constructor(private _activeRouter: ActivatedRoute) { }

  articleList = DB.articlesList;
  public id: number;
  public article: Article;
  public hasImage = false;

  ngOnInit() {
    this._activeRouter.params.subscribe((params) => (this.id = params.id));
    this.article = this.articleList.find((article) => article.id == this.id);
    if (this.article.imgURL && this.article.imgURL.length > 0)
      this.hasImage = true;
  }
}

