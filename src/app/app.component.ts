import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  userId: string = localStorage.getItem('userId');

  constructor(
    private router: Router
  ) { }

  logOut() {
    localStorage.removeItem('userId');
    this.router.navigate(['/']);
    this.userId = localStorage.getItem('userId');
  }

}
