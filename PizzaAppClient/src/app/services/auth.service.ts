import { Injectable, signal } from '@angular/core';
import { PizzaService } from './pizza.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {
  Login,
  LoginResponse,
  Register,
} from '../types/interfaces/auth.interface';
import { apiUrl, snackBarConfig } from '../constants/app.constants';
import { catchError, Observable, of, retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = signal<boolean>(false);

  constructor(
    private pizzaService: PizzaService,
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private router: Router
  ) {
    this.isLoggedIn.set(!!localStorage.getItem('token'));
  }

  register(registerCredentials: Register):Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${apiUrl}/User/register`, registerCredentials, { headers }).pipe(
      tap(() => {
        this.snackbar.open(
          'You have sucesfully register',
          'Close',
          snackBarConfig
        );
        this.router.navigate(['/login']);
      }),
      catchError((error) => {
        this.snackbar.open(
          error?.error?.errors[0] || 'Error while registering',
          'Close',
          snackBarConfig
        );
        return of(null);
      })
    );
  }

  #isTokenValid(): boolean {
    const tokenExpirationDate: string | null = localStorage.getItem(
      'tokenExpirationDate'
    );
    if (!tokenExpirationDate) return false;

    return new Date(tokenExpirationDate) > new Date();
  }

  #setToken(token: string, tokenExpirationDate: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpirationDate', tokenExpirationDate);
  }

  login(loginCredentials: Login): Observable<any> {
    return this.http
      .post<LoginResponse>(`${apiUrl}/User/login`, loginCredentials)
      .pipe(
        tap((response: LoginResponse) => {
          this.#setToken(response.result.token, response.result.validTo);
          if (!this.#isTokenValid()) {
            throw new Error(`Error while logging in`);
          }
          this.isLoggedIn.set(true);
          this.snackbar.open(
            'You have sucessfully logged in',
            'Close',
            snackBarConfig
          );
          this.router.navigate([`/`]);
        }),
        catchError((error) => {
          if (error) {
            this.snackbar.open(
              error?.error?.errors[0] || 'Error while logging in',
              'Close',
              snackBarConfig
            );
          }
          return of(null);
        })
      );
  }

  logout() {
    this.isLoggedIn.set(false);
    this.pizzaService.updateActiveOrder([]);
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpirationDate');
    this.router.navigate(['/login']);
  }

  //How to subscribe to an observable
  getUser() {
    return this.http.get(`${apiUrl}/User`).subscribe((result) => {
      console.log(result);
    });
  }
}
