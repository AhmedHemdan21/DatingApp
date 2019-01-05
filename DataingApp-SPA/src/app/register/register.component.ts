import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from '../_services/auth.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {

@Output() cancelRegister = new EventEmitter();

  constructor(private authService:AuthService) {}
  ngOnInit() {}



  isShow: boolean;
  model: any = {};

  register() {
    this.authService.register(this.model).subscribe(()=>{
      console.log('regestration successful'),
      error=>{
        console.log(error);
      }
    });
    this.cancel();
    console.log(this.model);
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log("cancelled");
  }
}
