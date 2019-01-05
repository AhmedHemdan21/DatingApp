import { Component } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.componet.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent {
  model: any = {};
name:string;

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.name = this.authService.name;
        console.log(this.name + " logged in successfully");
        this.model = {};
      },
      error => {
        console.log("Failed to login");
      }
    );
  }

  loggedIn(){
     const token= localStorage.getItem('token') != null
      return !!token; // if token is exist returns true, if empty returns false
  }

  logout(){
      localStorage.removeItem('token');
      console.log('logged out');
  }
}
