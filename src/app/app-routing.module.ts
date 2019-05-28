import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts/posts.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';

const routes: Routes = [
{ path: '', component: MainPageComponent },
{ path: 'posts/create', component: PostFormComponent},
{ path: 'posts', component: PostsComponent },
{ path: 'posts/:id', component: PostDetailsComponent },
{ path: 'posts/edit/:id', component: PostEditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
