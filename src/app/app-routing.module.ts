import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home',  pathMatch: 'full'},
  {path: 'home', component: MainPageComponent},
  {path: 'logowanie', component: LoginFormComponent},
  {path: 'rejestracja', component: RegisterFormComponent},
  {path: 'kontakt', component: MainPageComponent},
  {path: 'regulamin', component: MainPageComponent},
  {path: 'o-nas', component: MainPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
