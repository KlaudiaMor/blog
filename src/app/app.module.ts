import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { AuthGuard } from './auth-guard.service';
import { CustomerGuard } from './customer-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      PostsModule,
      UserModule,
      MatMenuModule,
      MatButtonModule,
      MatToolbarModule
    ],
  providers: [
    AuthGuard,
    CustomerGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
