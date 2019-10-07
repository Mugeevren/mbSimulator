import { Component } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  constructor(public authService: AuthService,
    public apiService: ApiService) {

  }
  
}
