import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { RegisterService } from './register.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userNotTakenValidatorService: UserNotTakenValidatorService,
              private registerService: RegisterService,
              private router: Router) { }

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
    })
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
