import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentiction.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onLogon(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authenticationService.logOnUser(email, password);
    console.log("done");
    form.resetForm();
  }
  

  onClear(form: NgForm) {
    form.resetForm();
  }
}
