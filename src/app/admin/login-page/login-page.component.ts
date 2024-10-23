import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { AuthService } from '../../shared/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {

  public submitted:boolean = false;
  
  constructor(
    public auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    this.auth.login({
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    })
    .subscribe(res => {
      console.log(res)
      this.form.reset
      this.router.navigate(['/admin', 'dashboard'])
      this.submitted = false
    })
    
  }

  public form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
}
