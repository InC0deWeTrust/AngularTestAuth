import { Component, OnInit } from '@angular/core';
import { AuthDto, LoginDto } from 'src/shared/service-proxies/service-proxies';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public authDto: AuthDto;

  constructor(
    private _authService: AuthServiceService,
    private _router: Router
  ) { 
    this.authDto = new AuthDto;
  }

  ngOnInit(): void {
  }

  logIn(logInDto: LoginDto){
    this._authService.signIn(logInDto).subscribe(result => {
      this.authDto = result;
      this._router.navigate(["/Home"])
    })
  }
}
