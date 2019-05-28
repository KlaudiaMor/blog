import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PostsService } from './shared/post.service';
import { PostsComponent } from './posts/posts.component';
import { PostsItemComponent } from './posts-item/posts-item.component';
import { PostFormComponent } from './post-form/post-form.component';
import { MatSelectModule, MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostAlertsComponent } from './post-alerts/post-alerts.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    PostsComponent,
    PostsItemComponent
  ],
  declarations: [
    PostsComponent,
    PostsItemComponent,
    PostFormComponent,
    PostDetailsComponent,
    PostEditComponent,
    PostAlertsComponent
  ],
  providers: [PostsService],
})
export class PostsModule { }
