import {Component, OnInit} from '@angular/core';
import {Course} from "../../../../models/course.model";
import {CourseService} from "../../../../services/course.service";
import {AuthService} from "../../../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../../models/user.model";
import {UserService} from "../../../../services/user.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-admin-student-index',
  templateUrl: './admin-student-index.component.html',
  styleUrls: ['./admin-student-index.component.scss']
})
export class AdminStudentIndexComponent implements OnInit {
  students: User[];
  admin: String;

  constructor(private userService: UserService, private messageService: MessageService, private authService: AuthService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.admin = localStorage.getItem('username');
    this.userService.getAllStudents().subscribe((res: User[]) => {
      this.students = res;
    });
  }

  onClickDetail(id: number) {
    this.router.navigateByUrl('profile/' + id);
  }

  onClickDelete(id: number){
    this.userService.deleteUser(id).subscribe((res) =>{
      this.messageService.add({severity:"success", summary: "Student", detail: "Student has been deleted"});
    })
  }
}
