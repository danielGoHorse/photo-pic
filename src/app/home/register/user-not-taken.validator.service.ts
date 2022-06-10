import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class UserNotTakenValidatorService {

  constructor(private registerService: RegisterService) { }

  checkUserNameTaken(){
    return (control: AbstractControl) => {
      return control.valueChanges
    .pipe(debounceTime(300))
    .pipe(switchMap(userName => 
       this.registerService.checkUserNameTaken(userName)
    ))
    .pipe(map(isTaken => isTaken ? { userName: true } : null))
    .pipe(first());
    }
  }

}
