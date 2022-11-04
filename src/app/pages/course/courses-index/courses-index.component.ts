import { Component, OnInit } from '@angular/core';
import {Course} from "../../../models/course.model";
import {CourseService} from "../../../services/course.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-courses-index',
  templateUrl: './courses-index.component.html',
  styleUrls: ['./courses-index.component.scss']
})
export class CoursesIndexComponent implements OnInit {

  courses: Course[];
  numbers: number[];
  firstIndex: number = 0;

  constructor(private courseService: CourseService, private router: Router) {
    this.numbers = [0, 1, 2, 3];
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((res:Course[])=>{
      this.courses = res;
    });
  }

  onClickCourse(id){
    this.router.navigateByUrl('courses/'+id)
  }

}
