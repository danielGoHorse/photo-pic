import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { RequestInteceptor } from './auth/request.inteceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInteceptor,
    multi: true;
  } ]
})
export class CoreModule { }
