import { Component, OnInit,Input } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  @Input() registerMode: boolean;

  ngOnInit() {}

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean){
    this.registerMode = registerMode
  }
}
