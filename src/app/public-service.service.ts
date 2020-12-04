import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PublicServiceService {
  constructor(private http: HttpClient) {}

  getAllArticles(articleTitle, category): Observable<any> {
    if (category && category.length > 0)
      return this.http.get(
        "http://localhost:3000/public/articles" + "/?category=" + category
      );
    else return this.http.get("http://localhost:3000/public/articles");
  }

  getAllCategories(): Observable<any> {
    return this.http.get("http://localhost:3000/public/categories");
  }
}
