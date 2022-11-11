import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../../services/course.service";
import {Course} from "../../../models/course.model";
import {AuthService} from "../../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-instructor-index',
  templateUrl: './instructor-index.component.html',
  styleUrls: ['./instructor-index.component.scss']
})
export class InstructorIndexComponent implements OnInit {

  courses : Course[];
  instructor: String;

  constructor(private courseService: CourseService, private authService: AuthService, private route: ActivatedRoute, private router: Router, private messageResponse: MessageService) { }

  ngOnInit(): void {
    this.instructor = localStorage.getItem('username');
    console.log(this.instructor)
    this.courseService.getCoursesByInstructor().subscribe((res:Course[]) =>{
      this.courses = res;
    });
  }

  onClickEdit(id){
    this.router.navigateByUrl('instructor/edit/'+id);
  }

  onClickDetail(id){
    this.router.navigateByUrl('instructor/'+id);
  }

  onDelete(id) {
    this.messageResponse.add({severity: 'error', summary:'Course', detail: 'this course is enrolled by student'})
  }
}
