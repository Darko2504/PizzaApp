import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const routerService = inject(Router);

  if(!authService.isLoggedIn()){
    return routerService.navigate(['/not-allowed']);
  }
  return true;
};
