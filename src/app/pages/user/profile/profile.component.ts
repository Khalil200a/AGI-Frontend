import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id:number;
  user = new User();
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.userService.getUser(this.id).subscribe((res)=>{
      this.user = res;
    })
  }

  onClickDetail(course_id: number) {

  }

  onDelete(course_id: number) {

  }
}
