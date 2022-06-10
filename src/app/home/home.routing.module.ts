import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/auth/auth.guard";
import { HomeComponent } from "./home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";



const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children:[
            {
                path: '',
                component: LoginComponent,
            },
            {
                path: 'register',
                component: RegisterComponent,
            },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {

}