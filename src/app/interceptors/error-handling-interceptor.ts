import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
                catchError((error: HttpErrorResponse) => {
                let errorMsg: string;
                if (error.error instanceof ErrorEvent) {
                    // Errores del lado del cliente
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    // Errores del lado del servidor
                    errorMsg = `Error Code: ${error.status}, Message: ${error.message}`;
                }
                console.log(errorMsg);
                return throwError(errorMsg);
                })
            );
    }
}
