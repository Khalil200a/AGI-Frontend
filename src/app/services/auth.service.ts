import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'http://localhost:8080/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) {}
  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/auth/signup`;
    return this.http.post(api, user).pipe(map((res:any) =>{
      return res;
    }));
  }
  // Sign-in
  signIn(user: User) {
    return this.http
      .post<any>(`${this.endpoint}/auth/signin`, user)
      .subscribe((res: any) => {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('username', res.username);
        localStorage.setItem('id', res.id);
        localStorage.setItem('role', res.roles[0]);
        this.getUserProfile(res.id).subscribe((res) => {
          this.currentUser = res;
          if(res.role[0] =="ROLE_INSTRUCTOR"){
            this.router.navigate(['instructor']);
          }else if(res.role[0]=="ROLE_STUDENT"){
            this.router.navigate(['student'])
          }
        });
      });
  }
  getToken() {
    return localStorage.getItem('accessToken');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('accessToken');
    return authToken != null;

  }
  doLogout() {
    let removeToken = localStorage.removeItem('accessToken');
    if (removeToken == null) {
      this.router.navigate(['signin']);
    }
  }
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/auth/profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
