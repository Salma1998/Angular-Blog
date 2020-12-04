import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DB } from 'src/app/utils/articlesList';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router) { }

  public user = DB.user_info;
  public url: string
  authorsList = DB.authorsList;
  ngOnInit() {
  }
  public articleTitle = "";

  search() {
    console.log("here "+this.articleTitle)
 //  if(event.keyCode===13)
    if ( this.articleTitle.length > 0 ) {
      
    return this.router.navigate(['/?articleTitle='+this.articleTitle])
    }
  }
  
}
