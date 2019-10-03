import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(
    public authService: AuthService){}

  ngOnInit(){
      this.isAuthenticated = this.authService.isAuthenticated();    
      let authCodeIndex = window.location.href.indexOf('code');
      if(!this.isAuthenticated && authCodeIndex != -1){
          this.authService.retrieveToken(window.location.href.substring(authCodeIndex + 5));
      }
  }

  onConnectClick() {
    window.location.href = this.authService.getAuthCodeURL();
  }

  logout() {
    this.authService.logout();
    this.isAuthenticated = false;
  }
}
