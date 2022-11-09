import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SigninComponent} from "./pages/signin/signin.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {CoursesIndexComponent} from "./pages/course/courses-index/courses-index.component";
import { AuthGuard } from "./helpers/auth.guard";
import {CoursesShowComponent} from "./pages/course/courses-show/courses-show.component";
import {InstructorIndexComponent} from "./pages/instructor/instructor-index/instructor-index.component";
import {InstructorEditComponent} from "./pages/instructor/instructor-edit/instructor-edit.component";
import {StudentIndexComponent} from "./pages/student/student-index/student-index.component";
import {StudentEditComponent} from "./pages/student/student-edit/student-edit.component";
import {AdminStudentIndexComponent} from "./pages/admin/student/admin-student-index/admin-student-index.component";
import {
  AdminInstructorIndexComponent
} from "./pages/admin/instructor/admin-instructor-index/admin-instructor-index.component";
import {AdminCoursesIndexComponent} from "./pages/admin/course/admin-courses-index/admin-courses-index.component";
import {InstructorCreateComponent} from "./pages/instructor/instructor-create/instructor-create.component";
import {InstructorShowComponent} from "./pages/instructor/instructor-show/instructor-show.component";
import {LessonCreateComponent} from "./pages/instructor/lesson/lesson-create/lesson-create.component";
import {LessonEditComponent} from "./pages/instructor/lesson/lesson-edit/lesson-edit.component";
import {LessonShowComponent} from "./pages/instructor/lesson/lesson-show/lesson-show.component";
import {LessonIndexComponent} from "./pages/instructor/lesson/lesson-index/lesson-index.component";
import {StudentShowComponent} from "./pages/student/student-show/student-show.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'courses',
    children:[
      {path:'', component: CoursesIndexComponent, canActivate: [AuthGuard]},
      {path:':id', component:CoursesShowComponent, canActivate: [AuthGuard]}
    ]
  },
  {path:'instructor',
    children:[
      {path:'', component: InstructorIndexComponent, canActivate: [AuthGuard]},
      {path:'create', component: InstructorCreateComponent, canActivate: [AuthGuard]},
      {path:':id', component: InstructorShowComponent, canActivate: [AuthGuard]},
      {path:'edit/:id', component: InstructorEditComponent, canActivate: [AuthGuard]},
      {path:'lesson',
        children:[
          {path:':id', component:LessonIndexComponent, canActivate:[AuthGuard]},
          {path:'create/:id', component: LessonCreateComponent, canActivate: [AuthGuard]},
          {path:'edit/:id', component: LessonEditComponent, canActivate: [AuthGuard]},
          {path:'detail/:id', component: LessonShowComponent, canActivate: [AuthGuard]}
        ]
      }
    ]
  },
  {path:'student',
    children:[
      {path:'', component: StudentIndexComponent, canActivate: [AuthGuard]},
      {path:':id', component: StudentShowComponent, canActivate: [AuthGuard]},
      {path:'edit/:id', component: StudentEditComponent, canActivate: [AuthGuard]},
    ]
  },
  {path:'admin',
    children:[
      {path:'student', component: AdminStudentIndexComponent, canActivate: [AuthGuard]},
      {path:'instructor', component: AdminInstructorIndexComponent, canActivate: [AuthGuard]},
      {path:'course', component: AdminCoursesIndexComponent, canActivate: [AuthGuard]},
    ]
  },

  {path: '', redirectTo:'/home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
