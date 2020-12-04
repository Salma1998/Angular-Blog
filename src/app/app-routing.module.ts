import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleComponent } from "./component/article/article.component";
import { AllArticlesComponent } from "./pages/all-articles/all-articles.component";
import { EditArticleComponent } from "./pages/edit-article/edit-article.component";
import { LoginComponent } from "./pages/login/login.component";
import { NavBarComponent } from "./pages/nav-bar/nav-bar.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { ReviewArticleComponent } from "./pages/review-article/review-article.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";

const routes: Routes = [
  {
    path: "",
    component: ArticleComponent,
    children: [
      {
        path: "profile/:id",
        component: ProfileComponent,
      },
      {
        path: "edit-article/:id",
        component: EditArticleComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "sign-up",
        component: SignUpComponent,
      },
      {
        path: "allArticles/:id",
        component: ReviewArticleComponent,
      },
      {
        path: "allArticles/:articleTitle",
        component: AllArticlesComponent,
      },
      {
        path: "allArticles/:category",
        component: AllArticlesComponent,
      },
      {
        path: "allArticles",
        component: AllArticlesComponent,
      },
      { path: "**", redirectTo: "allArticles" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
