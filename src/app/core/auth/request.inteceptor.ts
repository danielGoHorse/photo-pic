import { HttpEvent, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../token/token.service";

@Injectable()
export class RequestInteceptor implements HttpInterceptor{

    constructor(private tokenService: TokenService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpSentEvent 
    | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> >> {
        if(this.tokenService.hasToken()){
            const token = this.tokenService.getToken();
            req = req.clone({
                setHeaders:{
                    'x-access-token': token
                }
            })
        }
        return next.handle(req)
    }

}