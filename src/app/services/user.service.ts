import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllStudents(){
    return this.http.get<User[]>(`${environment.apiUrl}/admin/students`).pipe(map((res)=>{
      return res;
    }))
  }

  getAllInstructors(){
    return this.http.get<User[]>(`${environment.apiUrl}/admin/instructors`).pipe(map((res)=>{
      return res;
    }))
  }
}
