import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CourseService} from "../../../services/course.service";
import {ActivatedRoute} from "@angular/router";
import {Course} from "../../../models/course.model";

@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.scss']
})
export class InstructorEditComponent implements OnInit {

  courseFrom: FormGroup;
  course: Course = {} as Course;
  id: number;
  constructor(private _formBuilder: FormBuilder, private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.courseService.getCourse(this.id).subscribe((res:Course) =>{
      this.course = res;
    })
  }

  initCourseForm(){
    this.courseFrom = this._formBuilder.group({
      course_id: [{value: this.course.course_id}],
      course_name: [{value: this.course.course_name}],
      course_desc: this.course.course_desc,
      course_img: this.course.course_img,
      course_duration: this.course.course_duration,
      course_price: this.course.course_price,
      course_original_price: this.course.course_original_price,
      courses_author: this.course.courses_authors[0]
    })
  }

  editCourse(){}
}
