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
import {AuthGuard} from './auth.guard';
import {AllAnnouncementsPageComponent} from './components/all-announcements-page/all-announcements-page.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home',  pathMatch: 'full'},
  {path: 'ogloszenia', component: AllAnnouncementsPageComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'logowanie', component: LoginFormComponent},
  {path: 'rejestracja', component: RegisterFormComponent},
  {path: 'kontakt', component: MainPageComponent},
  {path: 'regulamin', component: MainPageComponent},
  {path: 'o-nas', component: MainPageComponent},
  {path: 'ogloszenie', children: [
      {path: ':id', component: SingleAnnouncementViewComponent},
      {path: '', component: AllAnnouncementsPageComponent, pathMatch: 'full'}
    ]},
  {path: 'dodaj-ogloszenie', component: AddingAnnouncementPageComponent,
    canActivate: [AuthGuard]
  },
  {path: 'moj-profil', component: ProfilePageComponent},
  {path: 'profil', children: [
      {path: ':id', component: ProfilePageComponent},
      {path: 'edycja', component: PersonalInfoEditPageComponent},
      {path: '', redirectTo: ':id', pathMatch: 'full'}
    ]},
    {path: '**', component: AllAnnouncementsPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
