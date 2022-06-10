import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { RegisterService } from './register.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  @ViewChild('inputEmail') inputEmail: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder,
              private userNotTakenValidatorService: UserNotTakenValidatorService,
              private registerService: RegisterService,
              private router: Router,
              private platFormDetectorService: PlatformDetectorService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email:['', 
        [
          Validators.required,
          Validators.email
        ]],
      fullName:['', 
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]],
      userName:['', 
      [
        Validators.required,
        lowerCaseValidator,
        Validators.minLength(2),
        Validators.maxLength(30)
      ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password:['', 
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14)
      ]],
    });
    this.platFormDetectorService.isPlatformBrowser() &&
    this.inputEmail.nativeElement.focus();
  }

  registrar(){
    const newUser = this.registerForm.getRawValue() as NewUser;
    this.registerService
      .registrar(newUser)
      .subscribe(
        () => this.router.navigate(['']),
        err => console.log(err)
    )
  }

}
