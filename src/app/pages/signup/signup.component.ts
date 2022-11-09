import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {User} from "../../models/user.model";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user = new User();
  roles: Array<String>;
  selected: String;
  signupForm = new FormGroup({
    'username' : new FormControl(''),
    'email' : new FormControl(''),
    'password' : new FormControl(''),
    'role' : new FormControl(''),
  })
  constructor(public authService: AuthService, public router: Router) {}
  ngOnInit() {
    this.roles = ['ROLE_ADMIN', 'ROLE_INSTRUCTOR', 'ROLE_STUDENT'];
    this.selected = 'ROLE_STUDENT';
  }
  registerUser() {
    this.user.username = this.signupForm.controls['username'].value;
    this.user.password = this.signupForm.controls['password'].value;
    this.user.email = this.signupForm.controls['email'].value;
    this.user.role = [this.signupForm.controls['role'].value];
    this.authService.signUp(this.user).subscribe((res) => {
      if (res.result) {
        this.signupForm.reset();
        this.router.navigate(['signin']);
      }
    });
  }
}
