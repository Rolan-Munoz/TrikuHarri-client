import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/loginRequest';
import { environment } from '../../environment/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;

  constructor(private http: HttpClient, private router: Router) {
    this.token = sessionStorage.getItem("token");
  }

  login(credentials: LoginRequest): Observable<any> {
    return this.http.post<any>(environment.urlApi + 'auth/login', credentials).pipe(
      tap((response) => {
        this.token = response.accessToken;
        if(this.token) {
          sessionStorage.setItem('token', this.token)
        }
      }))
  }

  logout(): void {
    this.token = null;
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("authToken")
    this.router.navigate(['/login']);

  }

  get userToken(): string | null {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.userToken;
  }

  
}
