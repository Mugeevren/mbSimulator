import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mercedesAuth } from 'src/environments/environment';
import {_} from 'underscore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public http: HttpClient,
    public router: Router){}

  getAuthCodeURL() {
    let authCodeURL = new URL(mercedesAuth.options.authorizationUri);
    authCodeURL.searchParams.append('response_type','code');
    authCodeURL.searchParams.append('client_id', mercedesAuth.options.clientId);
    authCodeURL.searchParams.append('redirect_uri', mercedesAuth.options.redirectUri);
    authCodeURL.searchParams.append('scope', mercedesAuth.options.scopes);
    return authCodeURL.href;
  }  
 
  retrieveToken(code){
    let isSuccess = false;
    const headers = {
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic '+btoa(mercedesAuth.options.clientId+":"+mercedesAuth.options.clientSecret)
    };
    const data = 'grant_type=authorization_code&code='+code+'&redirect_uri='+encodeURI(mercedesAuth.options.redirectUri);
     this.http.post(mercedesAuth.options.accessTokenUri, data, {headers: headers})
    .subscribe(
      data => {
        this.saveToken(data);
        this.router.navigate(['/vehicles']);
      },
      err => alert(err.error.error + ' : ' +err.error.error_description)
    ); 

  }
 
  saveToken(token){
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    localStorage.setItem('access_token', token.access_token);
    localStorage.setItem('refresh_token', token.refresh_token);
    localStorage.setItem('token_expire_date', expireDate.toString());
    console.log('Obtained Access token');
    //window.location.href = mercedesAuth.options.redirectUri;
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    // Check whether the token is expired and return
    // true or false
    //!this.jwtHelper.isTokenExpired(token)

    return token ? true : false;
  }
 
  logout() {
    localStorage.clear();
    window.location.reload();
  }
}
