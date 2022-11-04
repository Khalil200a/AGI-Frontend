import {Component, HostListener, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  stickyClass: boolean = false;

  constructor(private authService: AuthService) { }

  role:string;

  ngOnInit(): void {
    this.role = localStorage.getItem("role")
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 68) {
      this.stickyClass = true;
    } else {
      this.stickyClass = false;
    }
  }

  get isLoggedIn() : boolean{
    return this.authService.isLoggedIn;
  }

  onSignOut(){
    this.authService.doLogout();
  }

}
