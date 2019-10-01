import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mercedesAuth } from 'src/environments/environment';
import {_} from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public http: HttpClient){}

  getAuthCodeURL() {
    let authCodeURL = new URL(mercedesAuth.options.authorizationUri);
    authCodeURL.searchParams.append('response_type','code');
    authCodeURL.searchParams.append('client_id', mercedesAuth.options.clientId);
    authCodeURL.searchParams.append('redirect_uri', mercedesAuth.options.redirectUri);
    authCodeURL.searchParams.append('scope', mercedesAuth.options.scopes[0]);
    return authCodeURL.href;
  }  
 
  retrieveToken(code){
    let tokenUrl = new URL(mercedesAuth.options.accessTokenUri);   
    tokenUrl.searchParams.append('grant_type','authorization_code');
    tokenUrl.searchParams.append('code',code);
    tokenUrl.searchParams.append('client_id', mercedesAuth.options.clientId);
    tokenUrl.searchParams.append('redirect_uri', encodeURI(mercedesAuth.options.redirectUri));
    
 
    console.log(encodeURI(mercedesAuth.options.redirectUri));
    console.log(btoa(mercedesAuth.options.clientId+":"+mercedesAuth.options.clientSecret));
    let headers = new HttpHeaders({'Authorization': 'Basic '+btoa(mercedesAuth.options.clientId+":"+mercedesAuth.options.clientSecret)});
     this.http.post(tokenUrl.href, { headers: headers })
    .subscribe(
      data => this.saveToken(data),
      err => alert(err.error.error + ' : ' +err.error.error_description)
    ); 
  }
 
  saveToken(token){
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    localStorage.setItem('access_token', token.access_token);
    localStorage.setItem('refresh_token', token.refresh_token);
    localStorage.setItem('token_expire_date', expireDate.toString());
    console.log('Obtained Access token');
    window.location.href = mercedesAuth.options.redirectUri;
  }
 
  getResource(resourceUrl) : Observable<any>{
    var headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer '+localStorage.getItem('access_token')});
    return this.http.get(resourceUrl,{ headers: headers });
  }
 
  checkCredentials(){
    //TODO: check expire data for token
    return localStorage.getItem("accsess_token") ? true : false;
  } 
 
  logout() {
    localStorage.clear();
    window.location.reload();
  }
}
