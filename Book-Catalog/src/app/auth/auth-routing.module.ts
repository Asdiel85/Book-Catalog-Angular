import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { UserActivate } from "./guard/user.guard";


const routes: Routes = [{
    path: 'auth',
    children: [
        {path: 'register', component: RegisterComponent, canActivate: [UserActivate]},
        {path: 'login', component: LoginComponent, canActivate: [UserActivate]}
    ]
}];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AuthRoutingModule {}
  