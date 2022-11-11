import { Component, OnInit } from '@angular/core';
import {Course} from "../../models/course.model";
import {CourseService} from "../../services/course.service";
import {Router} from "@angular/router";
import {Landing} from "../../models/landing.model";
import {LandingPageService} from "../../services/landing-page.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courses: Course[];
  landing: Landing = {} as Landing;

  constructor(private courseService: CourseService, private router: Router, private landingService: LandingPageService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((res:Course[])=>{
      this.courses = res;
      this.landingService.getLanding().subscribe((res)=>{
        this.landing = res;
      })
    });
  }

  onClickCourse(id: number) {
    this.router.navigateByUrl('courses/'+id)
  }
}
