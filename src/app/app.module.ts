import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AllArticlesComponent } from "./pages/all-articles/all-articles.component";
import { ArticleComponent } from "./component/article/article.component";
import { NavBarComponent } from "./pages/nav-bar/nav-bar.component";
import { ReviewArticleComponent } from "./pages/review-article/review-article.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { EditArticleComponent } from "./pages/edit-article/edit-article.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { HttpClientModule } from "@angular/common/http";
import { PaginatorComponent } from "./pages/paginator/paginator.component";

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AllArticlesComponent,
    NavBarComponent,
    ReviewArticleComponent,
    LoginComponent,
    SignUpComponent,
    EditArticleComponent,
    ProfileComponent,
    PaginatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
