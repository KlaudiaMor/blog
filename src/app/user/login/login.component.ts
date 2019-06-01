import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginUser } from './login.model';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUser: LoginUser;
  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['']
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.userService.loginUser(this.loginForm.value)
        .subscribe((user: User[]) => {
          const userId = user[0]._id;
          localStorage.setItem('userId', userId);
          location.reload();

        }, (err) => this.errorMessage = '"Nie znaleziono użytkownika');
    } else {
      this.errorMessage = 'Wystąpił błąd';
    }

  }

}
