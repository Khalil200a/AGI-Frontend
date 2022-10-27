import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {Course} from "../models/course.model";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {
  }

  coursesJson = 'assets/json/course.json';

  getCourses() {
    return this.http.get<Course[]>(this.coursesJson).pipe(map((res) => {
      return res;
    }));
  }
}
