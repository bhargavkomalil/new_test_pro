import { Component, OnInit } from "@angular/core";
import { CommentsService } from "./comments.service";
// import { ToastrManager } from "ng6-toastr-notifications";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"]
})
export class CommentsComponent implements OnInit {
  commentsArray: any;
  labelTitle: any;

  constructor(
    // private toastr_: ToastrManager,
    private CommentsService_: CommentsService,
    
  ) {}

  ngOnInit() {
    this.get();
  }

  get() {
    this.CommentsService_.getProducts().subscribe(res => {
      if (res) {
        this.getcomments(res);
      } else {
        // this.toastr_.errorToastr("some thing went wrong!.", "Oops!");
      }
    });
  }

  getcomments(res) {
    this.commentsArray = res.data.children;
  }
}
