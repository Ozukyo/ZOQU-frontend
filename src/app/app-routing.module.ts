import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {SingleAnnouncementViewComponent} from './components/single-announcement-view/single-announcement-view.component';
import {ProfilePageComponent} from './components/profile-page/profile-page.component';
import {PersonalInfoEditPageComponent} from './components/personal-info-edit-page/personal-info-edit-page.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {CategoriesPageComponent} from './components/categories/categories-page/categories-page.component';
import {AnnouncementsViewComponent} from './components/announcements-view/announcements-view.component';
import {AddingAnnouncementPageComponent} from './components/adding-announcement-page/adding-announcement-page.component';
import {AuthService} from './services/auth.service';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home',  pathMatch: 'full'},
  {path: 'home', component: MainPageComponent},
  {path: 'logowanie', component: LoginFormComponent},
  {path: 'rejestracja', component: RegisterFormComponent},
  {path: 'kontakt', component: MainPageComponent},
  {path: 'regulamin', component: MainPageComponent},
  {path: 'o-nas', component: MainPageComponent},
  {path: 'ogloszenie', component: SingleAnnouncementViewComponent},
  {path: 'dodaj-ogloszenie', component: AddingAnnouncementPageComponent,
    canActivate: [AuthService]
  },
  {path: 'profil', component: ProfilePageComponent, children: [
      {path: 'edycja', component: PersonalInfoEditPageComponent}
    ]},
    {path: '**', component: SingleAnnouncementViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
