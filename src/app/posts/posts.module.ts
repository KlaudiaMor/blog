import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PostsService } from './shared/post.service';
import { PostsComponent } from './posts/posts.component';
import { PostsItemComponent } from './posts-item/posts-item.component';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    PostsComponent,
    PostsItemComponent
  ],
  declarations: [
    PostsComponent,
    PostsItemComponent,
    PostFormComponent
  ],
  providers: [PostsService],
})
export class PostsModule { }
