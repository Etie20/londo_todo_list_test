import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/authentication/login/login.component";
import {RegisterComponent} from "./pages/authentication/register/register.component";
import {HomeLayoutComponent} from "./core/layout/home-layout/home-layout.component";
import {HomeComponent} from "./pages/home/home.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "prefix"},
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
