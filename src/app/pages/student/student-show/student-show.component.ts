import { Component, OnInit } from '@angular/core';
import {Course} from "../../../models/course.model";
import {CourseService} from "../../../services/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {LessonService} from "../../../services/lesson.service";

@Component({
  selector: 'app-student-show',
  templateUrl: './student-show.component.html',
  styleUrls: ['./student-show.component.scss']
})
export class StudentShowComponent implements OnInit {
  course: Course = {} as Course;

  id: number;

  constructor(private courseService: CourseService, private router: Router, private messageService: MessageService, private route: ActivatedRoute, private lessonService: LessonService) {
  }

  ngOnInit(): void {
    this.courseService.getCourse(this.route.snapshot.params['id']).subscribe((res: Course) => {
      this.course = res;
    })
  }

  onUpdate(course: Course) {
    this.router.navigate(['instructor', 'edit', course.course_id]);
  }

  onClickEdit(lesson_id: number) {
    this.router.navigate(['instructor', 'lesson', 'edit', lesson_id])
  }

  onClickIndex() {
    this.router.navigate(['instructor', 'lesson', this.course.course_id])
  }

  onClickDetail(lesson_id: number) {
    this.router.navigate(['instructor', 'lesson', 'detail', lesson_id])
  }
}
