import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.css"],
})
export class PaginatorComponent implements OnInit {
  constructor(private _activeRouter: ActivatedRoute) {}

  public page;

  @Input() in: number;
  ngOnInit() {}
}
