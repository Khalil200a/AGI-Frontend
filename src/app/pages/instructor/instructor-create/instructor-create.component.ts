import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Course} from "../../../models/course.model";
import {CourseService} from "../../../services/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-instructor-create',
  templateUrl: './instructor-create.component.html',
  styleUrls: ['./instructor-create.component.scss']
})
export class InstructorCreateComponent implements OnInit {
  courseFrom = new FormGroup({
    course_id: new FormControl(0),
    course_name: new FormControl(''),
    course_desc: new FormControl(''),
    course_img: new FormControl(''),
    course_duration: new FormControl(''),
    course_price: new FormControl(''),
    course_original_price: new FormControl(''),
    courses_authors: new FormControl('')
  });
  course: Course = {} as Course;
  id: number;
  constructor(private _formBuilder: FormBuilder, private courseService: CourseService, private route: ActivatedRoute, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  createCourse(){
    this.course.course_name = this.courseFrom.controls['course_name'].value;
    this.course.course_desc = this.courseFrom.controls['course_desc'].value;
    this.course.course_duration = this.courseFrom.controls['course_duration'].value;
    //TODO
    this.course.course_img = this.courseFrom.controls['course_duration'].value;
    this.course.course_price = this.courseFrom.controls['course_price'].value;
    this.course.course_original_price = this.courseFrom.controls['course_original_price'].value;
    //TODO
    this.courseService.setCourse(this.course).subscribe( (response) =>{
      this.messageService.add({severity:'success', summary: 'Course', detail:'Course Created successfully'});
      this.router.navigate(['instructor']);
    });

  }
}
