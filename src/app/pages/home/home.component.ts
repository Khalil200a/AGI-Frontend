import { Component, OnInit } from '@angular/core';
import {Course} from "../../models/course.model";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    console.log("hi");
    this.courseService.getCourses().subscribe((res:Course[])=>{
      console.log(res);
      this.courses = res;
      console.log("hello");
    });
  }

}
