import { Injectable } from '@angular/core';
import {  Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate = (): boolean => {
    const isAuthenticated = this.authService.isAuthenticated();
    console.log('AuthGuardService#canActivate isAuthenticated:', isAuthenticated);
    if (!isAuthenticated) {
      // Si no está autenticado, redirige al usuario a la página de inicio de sesión
      this.router.navigate(['/login']).catch(error => {
        console.error('AuthGuardService#canActivate navigation error:', error);
      });
    }
    return isAuthenticated;
  }
  
  
}
