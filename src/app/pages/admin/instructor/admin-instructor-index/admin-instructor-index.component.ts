import { Component, OnInit } from '@angular/core';
import {User} from "../../../../models/user.model";
import {UserService} from "../../../../services/user.service";
import {AuthService} from "../../../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-admin-instructor-index',
  templateUrl: './admin-instructor-index.component.html',
  styleUrls: ['./admin-instructor-index.component.scss']
})
export class AdminInstructorIndexComponent implements OnInit {
  instructors : User[];
  admin: String;

  constructor(private userService: UserService, private messageService: MessageService, private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.admin = localStorage.getItem('username');
    this.userService.getAllInstructors().subscribe((res:User[]) =>{
      this.instructors = res;
    });
  }

  onClickDetail(id){
    this.router.navigate(['profile', id])
  }

  onClickDelete(id: number){
    this.userService.deleteUser(id).subscribe((res) =>{
      this.messageService.add({severity:"success", summary: "Student", detail: "Instructor has been deleted"})
    })
  }
}
