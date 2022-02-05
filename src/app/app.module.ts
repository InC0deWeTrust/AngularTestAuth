import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ServiceProxyModule } from 'src/shared/service-proxies/service-proxy.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './helpers/interceptors/error.interceptor';
import { JwtInterceptor } from './helpers/interceptors/jwt.interceptor';

import { AppComponent } from './app.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { BooksComponentAdmin } from './admin/books/books-admin.component';
import { ProfileComponent } from './profile/profile.component';
import { BookAuthorsComponent } from './book-authors/book-authors.component';
import { BookCompaniesComponent } from './admin/book-companies/book-companies.component';
import { RolesComponent } from './admin/actions/roles/roles.component';
import { UsersComponent } from './admin/actions/users/users.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    AboutComponent,
    BooksComponent,
    BooksComponentAdmin,
    ProfileComponent,
    BookAuthorsComponent,
    BookCompaniesComponent,
    RolesComponent,
    UsersComponent,
    HomeAdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServiceProxyModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
