import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginDto, AuthServiceProxy, AuthDto } from 'src/shared/service-proxies/service-proxies';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private currentUserSubject: BehaviorSubject<AuthDto>;
  private currentUser: Observable<AuthDto>;

  constructor(
    private _httpClient: HttpClient,
    private _authService: AuthServiceProxy
  ) { 
    this.currentUserSubject = new BehaviorSubject<AuthDto>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): AuthDto {
    return this.currentUserSubject.value;
  }

  signIn(logInDto: LoginDto){
    return this._authService.login(logInDto)
    .pipe(map(user => {
      if (user){
        localStorage.setItem('currentUser', JSON.stringify(user.token))
        this.currentUserSubject.next(user)
      }
      return user;
    }))
  }

  logOut(){
    localStorage.removeItem('currentUser')
  }
}
