import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Lesson} from "../models/lesson.model";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient) { }

  getLessons(id){
    return this.http.get<Array<Lesson>>(`${environment.apiUrl}/lessons/${id}`).pipe(map((res) =>{
      return res;
    }));
  }

  getLesson(id){
    return this.http.get<Lesson>(`${environment.apiUrl}/lessons/lesson/${id}`).pipe(map((res) =>{
      return res;
    }));;
  }

  postLesson(id, data: Lesson){
    return this.http.post<Lesson>(`${environment.apiUrl}/lessons/${id}`, data).pipe(map((res) =>{
      return res;
    }));;
  }

  putLesson(id, data:Lesson){
    return this.http.put<Lesson>(`${environment.apiUrl}/lessons/${id}`, data).pipe(map((res) =>{
      return res;
    }));;
  }

  deleteLesson(id){
    return this.http.delete(`${environment.apiUrl}/lessons/${id}`);
  }
}
