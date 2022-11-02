import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SigninComponent} from "./pages/signin/signin.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {CoursesIndexComponent} from "./pages/course/courses-index/courses-index.component";
import { AuthGuard } from "./helpers/auth.guard";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'courses',
    children:[
      {path:'index', component: CoursesIndexComponent, canActivate: [AuthGuard]}
    ]
  },
  {path: '', redirectTo:'/home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
