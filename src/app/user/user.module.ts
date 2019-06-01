import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';
import { UserAlertsComponent } from './user-alerts/user-alerts.component';
import { RegisterThnxComponent } from './register/register-thnx/register-thnx.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserAlertsComponent,
    RegisterThnxComponent
  ],
  providers: [
    UserService
  ],
})
export class UserModule { }
