import { Component, OnInit } from '@angular/core';
import {Course} from "../../../../models/course.model";
import {CourseService} from "../../../../services/course.service";
import {AuthService} from "../../../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-courses-index',
  templateUrl: './admin-courses-index.component.html',
  styleUrls: ['./admin-courses-index.component.scss']
})
export class AdminCoursesIndexComponent implements OnInit {
  courses : Course[];
  student: String;

  constructor(private courseService: CourseService, private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.student = localStorage.getItem('username');
    this.courseService.getCourses().subscribe((res:Course[]) =>{
      this.courses = res;
    });
  }

  onClickDetail(id){
    this.router.navigateByUrl('courses/'+id)
  }
}
