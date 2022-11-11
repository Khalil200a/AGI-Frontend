import { Component, OnInit } from '@angular/core';
import {Course} from "../../../models/course.model";
import {CourseService} from "../../../services/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-courses-show',
  templateUrl: './courses-show.component.html',
  styleUrls: ['./courses-show.component.scss']
})
export class CoursesShowComponent implements OnInit {

  course: Course = {} as Course;

  id: number;

  constructor(private courseService: CourseService,private router: Router, private messageService: MessageService, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.courseService.getCourse(this.route.snapshot.params['id']).subscribe((res: Course)=>{
      this.course = res;
    })
  }

  onBuy(course: Course){
    if (this.authService.isLoggedIn){
      return this.courseService.addCourseToStudent(course).subscribe((res) =>{
        this.messageService.add({severity:'success',summary:"Course",detail:"This course Has been enrolled"})
        this.router.navigate(['student']);
      });
    }
    else {
      this.messageService.add({severity:'error',summary:"Log In",detail:"You Should Log In First"})
      return null;
    }

  }



}
