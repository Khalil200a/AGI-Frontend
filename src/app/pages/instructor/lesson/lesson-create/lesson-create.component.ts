import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Course} from "../../../../models/course.model";
import {CourseService} from "../../../../services/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {Lesson} from "../../../../models/lesson.model";
import {LessonService} from "../../../../services/lesson.service";

@Component({
  selector: 'app-lesson-create',
  templateUrl: './lesson-create.component.html',
  styleUrls: ['./lesson-create.component.scss']
})
export class LessonCreateComponent implements OnInit {
  lessonFrom = new FormGroup({
    lesson_id: new FormControl(0),
    lesson_name: new FormControl(''),
    lesson_desc: new FormControl(''),
    lesson_url: new FormControl(''),
  });
  lesson: Lesson = {} as Lesson;
  id: number;
  constructor(private _formBuilder: FormBuilder, private lessonService: LessonService, private route: ActivatedRoute, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  createLesson(){
    this.lesson.lesson_name = this.lessonFrom.controls['lesson_name'].value;
    this.lesson.lesson_desc = this.lessonFrom.controls['lesson_desc'].value;
    this.lesson.lesson_url = this.lessonFrom.controls['lesson_url'].value;
    this.lessonService.postLesson(this.id, this.lesson).subscribe( (response) =>{
      this.messageService.add({severity:'success', summary: 'Lesson', detail:'Lesson Created successfully'});
      this.router.navigate(['instructor', this.id]);
    });

  }
}
