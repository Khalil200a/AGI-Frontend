import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CourseService} from "../../../services/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Course} from "../../../models/course.model";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.scss']
})
export class InstructorEditComponent implements OnInit {

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
    this.id = this.route.snapshot.params['id'];
    this.courseService.getCourse(this.id).subscribe((res:Course) =>{
      this.course = res;
      this.initCourseForm();
    });
  }

  initCourseForm(){
    this.courseFrom.patchValue({
        course_id: this.course.course_id,
        course_name: this.course.course_name,
        course_desc: this.course.course_desc,
        course_img: this.course.course_img,
        course_duration: this.course.course_duration,
        course_price: this.course.course_price,
        course_original_price: this.course.course_original_price,
      }
    )

 }

 editCourse(){
   this.course.course_name = this.courseFrom.controls['course_name'].value;
   this.course.course_desc = this.courseFrom.controls['course_desc'].value;
   this.course.course_duration = this.courseFrom.controls['course_duration'].value;
   this.course.course_price = this.courseFrom.controls['course_price'].value;
   this.course.course_original_price = this.courseFrom.controls['course_original_price'].value;
   //TODO
   this.courseService.updateCourse(this.course, this.course.course_id).subscribe((response) =>{
       this.messageService.add({severity:'success', summary:'Course', detail: 'Course Updated successfully'});
       this.router.navigate(['instructor']);
   }
   );

 }
}
