import { Component, OnInit } from '@angular/core';
import {Lesson} from "../../../../models/lesson.model";
import {LessonService} from "../../../../services/lesson.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-lesson-show',
  templateUrl: './lesson-show.component.html',
  styleUrls: ['./lesson-show.component.scss']
})
export class LessonShowComponent implements OnInit {

  lesson: Lesson = {} as Lesson;
  id: number;
  isStudent = (localStorage.getItem('role')==="ROLE_STUDENT")

  constructor(private lessonService: LessonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.lessonService.getLesson(this.id).subscribe((res) =>{
      this.lesson = res;
    })
  }

  onClickEdit(lesson_id: number) {
    this.router.navigate(['instructor', 'lesson', 'edit', lesson_id])
  }

  onBack() {
    this.router.navigate(['instructor'])
  }
}
