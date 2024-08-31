import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/authentication/login/login.component";
import {RegisterComponent} from "./pages/authentication/register/register.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
