import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthInterceptor } from '../../interceptors/auth-interceptor';
import { LoginRequest } from '../../models/loginRequest';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  loginError: string ='';
  loginForm= this.formBuilder.group({
    name:['', [Validators.required]],
    password:['', [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
  }
  
  get name() {
    return this.loginForm.controls.name;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
          console.log(userData.accessToken);
          window.sessionStorage.setItem('authToken', userData.accessToken);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError=JSON.stringify(errorData);
        },
        complete: () => {
          console.info('Login suscessfully');
          this.router.navigateByUrl('/admin/dashboard');
          this.loginForm.reset();
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
      alert('Error al ingresar credenciales');
    }
  }

}
