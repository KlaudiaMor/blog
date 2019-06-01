import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from './register/register.model';
import { LoginUser } from './login/login.model';

@Injectable()
export class UserService {
  readonly server: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  registerUser(registerUser: RegisterUser) {
    const url = `${this.server}/register/user`;

    return this.http.post(url, registerUser);
  }

  loginUser(loginUser: LoginUser) {
    const url = `${this.server}/login`;

    return this.http.post(url, loginUser);
  }

}
