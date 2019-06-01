import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts/posts.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthGuard } from './auth-guard.service';
import { CustomerGuard } from './customer-guard.service';
import { RegisterThnxComponent } from './user/register/register-thnx/register-thnx.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'posts/create', component: PostFormComponent, canActivate: [AuthGuard] },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: 'posts/edit/:id', component: PostEditComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [CustomerGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'register/thanks', component: RegisterThnxComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
