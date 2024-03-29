import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appInterceptorProvider } from './app.interceptor';
import { ErrorModalComponent } from './error-catch/components/error-modal/error-modal.component';
import { NotFoundComponent } from './not-found-page/not-found/not-found.component';



@NgModule({
  declarations: [
    ErrorModalComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [appInterceptorProvider]
})
export class SharedModule { }
