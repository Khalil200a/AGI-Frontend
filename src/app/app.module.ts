import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatIconModule} from "@angular/material/icon";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {MessagesModule} from 'primeng/messages';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesIndexComponent } from './pages/course/courses-index/courses-index.component';
import { CoursesShowComponent } from './pages/course/courses-show/courses-show.component';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import { InstructorIndexComponent } from './pages/instructor/instructor-index/instructor-index.component';
import { InstructorEditComponent } from './pages/instructor/instructor-edit/instructor-edit.component';
import { InstructorShowComponent } from './pages/instructor/instructor-show/instructor-show.component';
import { StudentIndexComponent } from './pages/student/student-index/student-index.component';
import { StudentEditComponent } from './pages/student/student-edit/student-edit.component';
import { StudentShowComponent } from './pages/student/student-show/student-show.component';
import { AdminStudentIndexComponent } from './pages/admin/student/admin-student-index/admin-student-index.component';
import { AdminInstructorIndexComponent } from './pages/admin/instructor/admin-instructor-index/admin-instructor-index.component';
import { AdminCoursesIndexComponent } from './pages/admin/course/admin-courses-index/admin-courses-index.component';
import { InstructorCreateComponent } from './pages/instructor/instructor-create/instructor-create.component';
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import { LessonEditComponent } from './pages/instructor/lesson/lesson-edit/lesson-edit.component';
import { LessonShowComponent } from './pages/instructor/lesson/lesson-show/lesson-show.component';
import { LessonCreateComponent } from './pages/instructor/lesson/lesson-create/lesson-create.component';
import { LessonIndexComponent } from './pages/instructor/lesson/lesson-index/lesson-index.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    CoursesIndexComponent,
    CoursesShowComponent,
    InstructorIndexComponent,
    InstructorEditComponent,
    InstructorShowComponent,
    StudentIndexComponent,
    StudentEditComponent,
    StudentShowComponent,
    AdminStudentIndexComponent,
    AdminInstructorIndexComponent,
    AdminCoursesIndexComponent,
    InstructorCreateComponent,
    LessonEditComponent,
    LessonShowComponent,
    LessonCreateComponent,
    LessonIndexComponent,
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    RouterOutlet,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    ToastModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
