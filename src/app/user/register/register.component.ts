import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUser } from './register.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerUser: RegisterUser;
  registerForm: FormGroup;
  successMessage: string;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registration() {
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value)
        .subscribe(() => {
          this.successMessage = 'Zarejestrowałeś się pomyślnie';
          this.router.navigate(['register/thanks']);
        });
    } else {
      this.errorMessage = 'Nie udało się zarejestrować';
    }

  }

}
