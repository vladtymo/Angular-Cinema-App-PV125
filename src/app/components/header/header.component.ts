import { Component } from '@angular/core';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private accountService: AccountService) { }

  logout(): void {
    this.accountService.logout().subscribe(res => {
      this.accountService.clearToken();
    })
  }
}
