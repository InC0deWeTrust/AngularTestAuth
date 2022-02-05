import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AuthGuardGuard } from './guards/auth-guard.guard';

//Routes for Admin
const adminRoutes: Routes = [
  {
    path: 'Book-Companies',
    component: BookCompaniesComponent
  },
  {
    path: 'Roles',
    component: RolesComponent
  },
  {
    path: 'Users',
    component: UsersComponent
  },
  {
    path: 'Books',
    component: BooksComponentAdmin
  }
]

const routes: Routes = [
  //Default routes
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'SignIn',
    component: SignInComponent
  },
  {
    path: 'SignUp',
    component: SignUpComponent
  },
  {
    path: 'Home',
    component: HomeComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'About',
    component: AboutComponent
  },

  //User routes
  {
    path: 'Profile',
    component: ProfileComponent
  },
  {
    path: 'Books',
    component: BooksComponent,
  },
  {
    path: 'Authors',
    component: BookAuthorsComponent
  },

  //Admin routes
  {
    path: 'Admin',
    component: HomeAdminComponent,
    children: adminRoutes,
    canActivate: [AuthGuardGuard]
    //How to set role here?
    // data: { Role}
  },

  //Default route if none is found
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
