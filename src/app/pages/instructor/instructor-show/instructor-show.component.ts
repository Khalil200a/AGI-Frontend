import { Component, OnInit } from '@angular/core';
import {Course} from "../../../models/course.model";
import {CourseService} from "../../../services/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LessonService} from "../../../services/lesson.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-instructor-show',
  templateUrl: './instructor-show.component.html',
  styleUrls: ['./instructor-show.component.scss']
})
export class InstructorShowComponent implements OnInit {

  course: Course = {} as Course;

  id: number;

  constructor(private courseService: CourseService,private router: Router, private messageService: MessageService, private route: ActivatedRoute, private lessonService: LessonService) { }

  ngOnInit(): void {
    this.courseService.getCourse(this.route.snapshot.params['id']).subscribe((res: Course)=>{
      this.course = res;
    })
  }

  onUpdate(course: Course){
    this.router.navigate(['instructor', 'edit', course.course_id]);
  }

  onClickEdit(lesson_id: number) {
    this.router.navigate(['instructor', 'lesson', 'edit', lesson_id])
  }

  onClickIndex(){
    this.router.navigate(['instructor', 'lesson', this.course.course_id])
  }

  onClickDetail(lesson_id: number) {
    this.router.navigate(['instructor', 'lesson', 'detail', lesson_id])
  }

  onDelete(lesson_id: number) {
    this.lessonService.deleteLesson(lesson_id).subscribe((res) => {
      this.messageService.add({severity: 'success', detail:"Lesson", summary: "Lesson Deleted Successfully"});
      this.router.navigate(['instructor'])
    })
  }

  onAddLesson() {
    this.router.navigate(['instructor', 'lesson', "create", this.course.course_id]);
  }
}
