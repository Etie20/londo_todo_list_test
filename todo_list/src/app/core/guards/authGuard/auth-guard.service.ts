import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../../../services/token/token.service';

export const CheckAuth: () => Promise<
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
> = async (): Promise<
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
> => {
  const router: Router = inject(Router);
  const tokenStorage: TokenService = inject(TokenService);
  if (tokenStorage.getToken() && !tokenStorage.isExpired()) {
    router.navigate(['home']).then();
    return false;
  }
  tokenStorage.removeToken();
  return true;
};

export const AuthGuard: () => Promise<
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
> = async (): Promise<
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
> => {
  const router: Router = inject(Router);
  const tokenStorage: TokenService = inject(TokenService);
  if (tokenStorage.getToken() && !tokenStorage.isExpired()) {
    return true;
  } else {
    tokenStorage.removeToken();
    router.navigate(['login']).then();
    return false;
  }
};
