import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule, // Add this to provide HttpClient
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  response: any;

  constructor(private http: HttpClient) {}

  register() {
    this.http
      .post('http://localhost:3000/api/users/register', {
        name: 'Alice',
        email: 'alice@example.com',
        password: 'password',
      })
      .subscribe((res) => (this.response = res));
  }

  login() {
    this.http
      .post('http://localhost:3000/api/users/login', {
        email: 'alice@example.com',
        password: 'password',
      })
      .subscribe((res: any) => {
        this.response = res;
        localStorage.setItem('token', res.token);
      });
  }

  getProfile() {
    const token = localStorage.getItem('token') || '';
    this.http
      .get('http://localhost:3000/api/users/profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .subscribe(
        (res) => (this.response = res),
        (err) => (this.response = err.error)
      );
  }
}
