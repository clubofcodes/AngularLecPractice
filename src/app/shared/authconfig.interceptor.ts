import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from '../shared/user-auth.service';
import { NodejsApiService } from './nodejs-api.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private _userAuthService: UserAuthService, private nodejsApiService: NodejsApiService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any>{

    const authToken = this.nodejsApiService.getAccessToken();

    req = req.clone({
      setHeaders:{
        Authorization: 'Bearer ' + authToken
      }
    })

    return next.handle(req);
  }

}
