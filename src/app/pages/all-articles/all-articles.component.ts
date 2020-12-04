import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PublicServiceService } from "src/app/public-service.service";
import { DB } from "src/app/utils/articlesList";
import { Location } from "@angular/common";
@Component({
  selector: "app-all-articles",
  templateUrl: "./all-articles.component.html",
  styleUrls: ["./all-articles.component.css"],
})
export class AllArticlesComponent implements OnInit {
  constructor(
    private location: Location,
    private router: Router,
    private publicService: PublicServiceService,
    private _activeRouter: ActivatedRoute
  ) {}

  public articlesList: Array<any> = null;
  public categoriesList: Array<any>;
  public articleTitle = "";
  public category = null;
  public pagesLength = 10;
  public pagesList: Array<any> = new Array<any>();
  ngOnInit() {
    this._activeRouter.params.subscribe(
      (params) => (this.articleTitle = params.articleTitle)
    );
    console.log("title " + this.articleTitle);
    this.publicService
      .getAllArticles(this.articleTitle, this.category)
      .subscribe(
        (res: any) => {
          this.articlesList = res.data.articles;
          this.pagesLength = res.data.pages;
          this.pagesList.length = res.data.pages;

          console.log(res);
        },
        (error) => {
          console.log("error");
        }
      );

    this.publicService.getAllCategories().subscribe(
      (res: any) => {
        this.categoriesList = res.data.categories;

        console.log(res);
      },
      (error) => {
        console.log("error");
      }
    );
  }

  searchByCategory(categoryName) {
    this.category = categoryName;
    console.log("categoryName " + categoryName);
    this.location.go("allArticles/?category=" + categoryName);
    //return this.router.navigate(["/?category=" + categoryName]);
  }
}
