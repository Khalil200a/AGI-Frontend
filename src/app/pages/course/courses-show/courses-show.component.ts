import { Component, OnInit } from '@angular/core';
import {Course} from "../../../models/course.model";
import {CourseService} from "../../../services/course.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-courses-show',
  templateUrl: './courses-show.component.html',
  styleUrls: ['./courses-show.component.scss']
})
export class CoursesShowComponent implements OnInit {

  course: Course = {} as Course;

  id: number;

  constructor(private courseService: CourseService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseService.getCourse(this.route.snapshot.params['id']).subscribe((res: Course)=>{
      this.course = res;
    })
  }

  onBuy(course: Course){
    return this.courseService.addCourseToStudent(course).subscribe((res) =>{
      this.router.navigate(['home']);
    });
  }



}
