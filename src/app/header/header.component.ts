import { Component, OnInit } from '@angular/core';
import { SessionService } from '../api/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less', './header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private session: SessionService, private router: Router) { }
  userRole: String = ''
  userEmail: String = ''
  userCustomer: String = ''
  userUsername: String = ''
  title = ''
  logo = 'assets/logo.svg'
  username = 'assets/username.png'
  client_logo = 'assets/client_logo.png'


  logout() {
    this.session.logout()
    this.router.navigateByUrl('/login-screen')
  }

  ngOnInit(): void {
    this.session.activeSession.subscribe(data => {
      if (typeof (data) == "object" && data !== null) {
        this.userCustomer = data.customer
        this.userEmail = data.email
        this.userUsername = data.username || data.email
        this.userRole = data.credential
      }
    }
    )
  }

}
