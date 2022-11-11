import { Component, OnInit } from '@angular/core';
import {Course} from "../../../../models/course.model";
import {CourseService} from "../../../../services/course.service";
import {AuthService} from "../../../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-admin-courses-index',
  templateUrl: './admin-courses-index.component.html',
  styleUrls: ['./admin-courses-index.component.scss']
})
export class AdminCoursesIndexComponent implements OnInit {
  courses : Course[];
  student: String;

  constructor(private courseService: CourseService, private messageResponse: MessageService, private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.student = localStorage.getItem('username');
    this.courseService.getCourses().subscribe((res:Course[]) =>{
      this.courses = res;
    });
  }

  onClickDetail(id){
    this.router.navigateByUrl('instructor/'+id);
  }

  onDelete(id) {
    this.messageResponse.add({severity:'error', summary:'Course', detail: 'this course is enrolled by student'});
  }
}
