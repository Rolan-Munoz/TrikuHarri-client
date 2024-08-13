import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService:AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Interceptando solicitud:', req); // Imprime la solicitud en la consola
    
        let token: string = this.authService.userToken!;
        if (token && !token.startsWith('Bearer ')) {
            token = `Bearer ${token}`;
        }
        if (token) {
            req = req.clone({
                setHeaders: {
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json',
                'Authorization': token,
            },
        });
        console.log('Solicitud después de agregar el encabezado de autorización:', req); // Imprime la solicitud después de agregar el encabezado de autorización
        }
    
        return next.handle(req);
    }
}
