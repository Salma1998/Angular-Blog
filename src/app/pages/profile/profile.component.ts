import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import Article, { Author, DB } from "src/app/utils/articlesList";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  articlesList = DB.articlesList;
  public userHasImage = false;
  constructor(private _activeRouter: ActivatedRoute) {}

  public userArticlesList: Array<Article>;
  public id: number = 2;
  public user: Author = null;
  authorsList = DB.authorsList;
  ngOnInit() {
    this._activeRouter.params.subscribe((params) => (this.id = params.id));
    this.user = this.authorsList.find((author) => {
      return author.id == this.id;
    });
    this.userArticlesList = this.articlesList.filter((article) => {
      return article.author.email == this.user.email;
    });
    if (this.user.image && this.user.image.length > 0) this.userHasImage = true;
    DB.user_info = {
      full_name: this.user.full_name,
      email: this.user.email,
      image: this.user.image,
    };
  }
}
