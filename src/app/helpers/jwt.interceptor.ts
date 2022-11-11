import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthService } from "../services/auth.service";
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authService.getToken();
    if(req.url.indexOf('landing-page')===-1){
      req = req.clone({
        setHeaders: {
          Authorization: "Bearer " + authToken
        }
      });
    }
    return next.handle(req);
  }
}
