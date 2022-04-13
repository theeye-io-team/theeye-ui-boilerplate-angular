import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../api/session/session.service';

@Component({
  selector: 'app-header-alt',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less', './header.component.css']
})
export class HeaderComponentAlt implements OnInit {

  constructor(private sessionService:SessionService, private router:Router) { }
  userRole : String = ''
  userEmail : String = ''
  title = ''
  logo = 'assets/logo.png'
  client_logo = 'assets/client_logo.svg'

  rootScreen = () => {
    this.router.navigateByUrl('/')
  }

  logout() {
		this.sessionService.logout();
	}
  
  ngOnInit(): void {

    this.sessionService.activeSession.subscribe(data => {
          if(typeof(data) == "object" && data !== null) {
            this.userEmail = data.email
            this.userRole = data.credential
          }
        }
      )
    }

}
