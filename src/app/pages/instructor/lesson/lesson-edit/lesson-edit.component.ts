import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Lesson} from "../../../../models/lesson.model";
import {LessonService} from "../../../../services/lesson.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.scss']
})
export class LessonEditComponent implements OnInit {
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
    this.lessonService.getLesson(this.id).subscribe((res) =>{
      this.lesson = res;
      this.initLesson();
    })
  }

  updateLesson(){
    this.lesson.lesson_name = this.lessonFrom.controls['lesson_name'].value;
    this.lesson.lesson_desc = this.lessonFrom.controls['lesson_desc'].value;
    this.lesson.lesson_url = this.lessonFrom.controls['lesson_url'].value;
    this.lessonService.putLesson(this.id, this.lesson).subscribe( (response) =>{
      this.messageService.add({severity:'success', summary: 'Lesson', detail:'Lesson Created successfully'});
      this.router.navigate(['instructor']);
    });

  }

  initLesson(){
    this.lessonFrom.patchValue({
      lesson_id: this.lesson.lesson_id,
      lesson_name: this.lesson.lesson_name,
      lesson_desc: this.lesson.lesson_desc,
      lesson_url: this.lesson.lesson_url
    })
  }
}
