import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/authentication/login/login.component";
import {RegisterComponent} from "./pages/authentication/register/register.component";
import {HomeLayoutComponent} from "./core/layout/home-layout/home-layout.component";
import {HomeComponent} from "./pages/home/home.component";
import {AuthGuard, CheckAuth} from "./core/guards/authGuard/auth-guard.service";
import {PomodoroComponent} from "./pages/pomodoro/pomodoro.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "prefix"},
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'pomodoro', component: PomodoroComponent }
    ]
  },
  { path: 'login', component: LoginComponent, canActivate: [CheckAuth]},
  { path: 'register', component: RegisterComponent, canActivate: [CheckAuth]},
];
