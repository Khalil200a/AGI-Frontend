import { Component, OnInit } from '@angular/core';
import {Lesson} from "../../../../models/lesson.model";
import {LessonService} from "../../../../services/lesson.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lesson-index',
  templateUrl: './lesson-index.component.html',
  styleUrls: ['./lesson-index.component.scss']
})
export class LessonIndexComponent implements OnInit {

  lessons: Array<Lesson>;
  id: number;
  constructor(private lessonService: LessonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.lessonService.getLessons(this.id).subscribe((res)=>{
      this.lessons = res;
    })
  }

  onClickEdit(lesson_id: number) {

  }

  onClickDetail(lesson_id: number) {

  }

  onDelete(lesson_id: number) {

  }
}
