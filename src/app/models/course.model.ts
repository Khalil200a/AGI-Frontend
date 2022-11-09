import {Lesson} from "./lesson.model";

export class Course {
  course_id: number;
  course_name: string;
  course_desc: string;
  course_img: string;
  course_duration: string;
  course_price: string;
  course_original_price: string;
  course_authors: Array<String>;
  course_lessons: Array<Lesson>;
}
