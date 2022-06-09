import { Injectable } from '@angular/core';

const KEY = 'authToken'
@Injectable({
  providedIn: 'root'
})
export class TokenService {

hasToken(){
  //truque velho de javaScript para converter o valor em boolean e trocar seu status
  return !!this.getToken();
}

setToken(token){
  window.localStorage.setItem(KEY , token);
}

getToken(){
  return window.localStorage.getItem(KEY)
}

removeToken(){
 window.localStorage.removeItem(KEY)
}
  
}
