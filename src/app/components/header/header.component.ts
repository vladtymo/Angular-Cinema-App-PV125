import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthorized: boolean = false;

  constructor(private accountService: AccountService) {
    
  }
  ngOnInit(): void {
    this.isAuthorized = this.accountService.isAuthorized();
  }

  logout(): void {
    this.accountService.logout().subscribe(res => {
      this.accountService.clearToken();
      this.isAuthorized = false;
    })
  }
}
