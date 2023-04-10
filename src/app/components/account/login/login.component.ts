import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { ILoginRequest } from '../account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide: boolean = true;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private accountService: AccountService) { }
 
  login(): void {
    if (!this.loginForm.valid) {
      alert("Invalid value, please enter again!");
      return;
    }

    let request = this.loginForm.value as ILoginRequest;

    // send POST request
    this.accountService.login(request).subscribe(res => {
      
      this.accountService.saveToken(res.token);
      console.log("Logged In! Token: " + res.token);
    });
  }
}
