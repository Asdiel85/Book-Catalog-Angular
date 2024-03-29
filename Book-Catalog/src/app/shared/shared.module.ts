import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appInterceptorProvider } from './app.interceptor';
import { ModalComponent } from './error-catch/components/modal/modal.component';
import { NotFoundComponent } from './not-found-page/not-found/not-found.component';



@NgModule({
  declarations: [
    ModalComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [appInterceptorProvider]
})
export class SharedModule { }
