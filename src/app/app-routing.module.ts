import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts/posts.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { AppComponent } from './app.component';

const routes: Routes = [
{ path: '', component: PostsComponent },
{ path: 'posts', component: PostsComponent },
{ path: 'posts/create', component: PostFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
