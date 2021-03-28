import {Inject, Injectable} from '@angular/core';
import {AuthGuard} from './auth.guard';
import {HttpHeaders} from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class GlobalService{
  constructor(@Inject('API_URL') private baseurl: string, private auth: AuthGuard) {}
  url = this.baseurl;

  getHttpOptions(){
    return{
      headers: new HttpHeaders({
        'Content-Type': 'Application/Json',
        Autorization: 'Bearer=' + this.auth.authToken()
      })
    };
  }

  getHttpOptionReport(){
    return{
      responseType: 'blob' as 'Json',
      headers: new HttpHeaders({
        Autorization: 'Bearer=' + this.auth.authToken()
      })
    };
  }

  getAuthToken(){
    return this.auth.authToken();
  }
  getUsername(){
    return this.auth.username();
  }
  destroyToken(){
    this.auth.destroySession();
  }
}
