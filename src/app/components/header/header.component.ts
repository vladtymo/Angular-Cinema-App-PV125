import { Component } from '@angular/core';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isAuthorized: boolean;

  constructor(private accountService: AccountService) {
    this.isAuthorized = accountService.isAuthorized();
  }

  logout(): void {
    this.accountService.logout().subscribe(res => {
      this.accountService.clearToken();
      this.isAuthorized = false;
    })
  }
}
