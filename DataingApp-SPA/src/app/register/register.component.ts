import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {

@Output() cancelRegister = new EventEmitter();

  constructor(private authService:AuthService,private alertify:AlertifyService) {}
  ngOnInit() {}



  isShow: boolean;
  model: any = {};

  register() {
    this.authService.register(this.model).subscribe(()=>{
      this.alertify.success('regestration successful');
      this.cancel()
      ,
      error=>{
        console.log(error);
      }
    });

   this.alertify.error(this.model);
  }

  cancel() {
    this.cancelRegister.emit(false);
   
  }
}
