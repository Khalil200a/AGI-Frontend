import { Component, OnInit } from '@angular/core';
import {Course} from "../../../models/course.model";
import {CourseService} from "../../../services/course.service";
import {AuthService} from "../../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.scss']
})
export class StudentIndexComponent implements OnInit {

  courses : Course[];
  student: String;

  constructor(private courseService: CourseService, private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.student = localStorage.getItem('username');
    this.courseService.getCoursesByStudent().subscribe((res:Course[]) =>{
      this.courses = res;
    });
  }

  onClickDetail(id){
    this.router.navigateByUrl('courses/'+id)
  }
}
