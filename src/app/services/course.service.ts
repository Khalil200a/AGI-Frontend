import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {Course} from "../models/course.model";
import {environment} from "../../environments/environment";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {
  }

  coursesJson = 'assets/json/course.json';

  //Get all the Courses
  getCourses() {
    return this.http.get<Course[]>(`${environment.apiUrl}/courses`).pipe(map((res) => {
      return res;
    }));
  }

  updateCourse(course:Course, id){
    return this.http.put(`${environment.apiUrl}/courses/${id}`, course);
  }

  setCourse(course:Course){
    return this.http.post(`${environment.apiUrl}/courses`, course);
  }

  //Get Course by Id
  getCourse(id: number){
    return this.http.get<Course>(`${environment.apiUrl}/courses/${id}`).pipe(map((res) =>{
      return res;
    }));
  }

  getCoursesByInstructor(){
    return this.http.get<Course[]>(`${environment.apiUrl}/courses/instructor`).pipe(map((res)=>{
      return res;
    }));
  }

  getCoursesByStudent(){
    return this.http.get<Course[]>(`${environment.apiUrl}/courses/student`).pipe(map((res)=>{
      return res;
    }));
  }

  addCourseToStudent(course: Course){
    return this.http.post(`${environment.apiUrl}/courses/student/${course.course_id}`, course)
  }

  deleteCourse(id){
    return this.http.delete(`${environment.apiUrl}/courses/${id}`).pipe(map((res) =>{
      return res;
    }));
  }

  deleteCourseByStudent(id){
    return this.http.delete(`${environment.apiUrl}/courses/student/${id}`).pipe(map((res) =>{
      return res;
    }));
  }
}
