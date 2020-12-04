import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import Article, { DB } from "src/app/utils/articlesList";

@Component({
  selector: "app-review-article",
  templateUrl: "./review-article.component.html",
  styleUrls: ["./review-article.component.css"],
})
export class ReviewArticleComponent implements OnInit {
  constructor(
    private _activeRouter: ActivatedRoute,
    private http: HttpClient
  ) { }

  articleList = DB.articlesList;
  public id: number;
  public article:any;
  public articleHasImage = false;
  public userHasImage = false;
  public error = true;
  public errorMessage;
  public errorCode;

  ngOnInit() {
    this._activeRouter.params.subscribe((params) => (this.id = params.id));

    /*  this.article = this.articleList.find((article) => article.id == this.id);
    if (this.article.imgURL && this.article.imgURL.length > 0)
      this.articleHasImage = true; */
console.log("id "+this.id)
    this.http.get(`http://localhost:3000/public/articles/read_article/${this.id}`)
      .subscribe(
        (res: any) => {
          this.article = res.data.articles;
console.log(res)
          if (this.article.coverUrl && this.article.coverUrl.length > 0)
            this.articleHasImage = true;

          if (this.article.authorImageUrl && this.article.authorImageUrl.length > 0)
            this.articleHasImage = true;

          this.error = false;
        },
        (error) => {
          this.errorCode = error.status;
          this.errorMessage = error.error.message;
        }
      );
  }
}
