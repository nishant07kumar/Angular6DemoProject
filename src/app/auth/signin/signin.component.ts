import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentiction.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onLogIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authenticationService.loginUser(email, password);
    console.log("done");
    form.resetForm();
  }
  onClear(form: NgForm) {
    form.resetForm();
  }
}
