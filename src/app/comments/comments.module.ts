import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsService } from './comments.service';


@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule,

  ],
  providers:[CommentsService],
  // bootstrap: [CommentsComponent]
})
export class CommentsModule { }
