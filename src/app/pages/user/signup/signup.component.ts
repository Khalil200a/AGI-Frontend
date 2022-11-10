import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import {User} from "../../../models/user.model";
import {MessageService} from "primeng/api";
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
    'username' : new FormControl('', [Validators.required, Validators.minLength(8)]),
    'email' : new FormControl('', [Validators.required, Validators.email]),
    'password' : new FormControl('', [Validators.required, Validators.pattern(/(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/), Validators.min(8)]),
    'role' : new FormControl(''),
  })
  constructor(public authService: AuthService, public router: Router, public messageService: MessageService) {}
  ngOnInit() {
    this.roles = ['ROLE_INSTRUCTOR', 'ROLE_STUDENT'];
    this.selected = 'ROLE_STUDENT';
  }
  registerUser() {
    this.user.username = this.signupForm.controls['username'].value;
    this.user.password = this.signupForm.controls['password'].value;
    this.user.email = this.signupForm.controls['email'].value;
    this.user.role = [this.signupForm.controls['role'].value];
    this.authService.signUp(this.user).subscribe((res) => {
      if (res!=null) {
        this.router.navigate(['signin']);
        this.messageService.add({severity: 'success', summary: "Sign Up", detail: "User Created Successfully"})
        this.signupForm.reset();
      }
    });
  }
}
