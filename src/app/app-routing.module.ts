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

const appRoutes: Routes = [
  {path: '', redirectTo: 'home',  pathMatch: 'full'},
  {path: 'home', component: MainPageComponent},
  {path: 'logowanie', component: LoginFormComponent},
  {path: 'rejestracja', component: RegisterFormComponent},
  {path: 'kontakt', component: MainPageComponent},
  {path: 'regulamin', component: MainPageComponent},
  {path: 'o-nas', component: MainPageComponent},
  {path: 'ogloszenie', component: SingleAnnouncementViewComponent},
  {path: 'profil', component: ProfilePageComponent},
  // children: [
  //     {path: 'edycja', component: PersonalInfoEditPageComponent}
  //   ]},
    {path: '**', component: MainPageComponent, children: [
        {path: 'moda', component: MainPageComponent, children: [
            {path: 't-shirty', component: MainPageComponent},
            {path: 'koszule', component: MainPageComponent},
            {path: 'bluzy', component: MainPageComponent},
            {path: 'spodnie', component: MainPageComponent},
            {path: 'krotkie-spodenki', component: MainPageComponent},
            {path: 'kurtki-i-plaszcze', component: MainPageComponent},
            {path: 'garnitury', component: MainPageComponent}
          ]},
        {path: 'bizuteria', component: MainPageComponent, children: [
            {path: 'naszyjniki', component: MainPageComponent},
            {path: 'pierscionki', component: MainPageComponent},
            {path: 'bransoletki', component: MainPageComponent},
            {path: 'spinki-do-mankietow', component: MainPageComponent},
          ]},
        {path: 'dodatki', component: MainPageComponent, children: [
            {path: 'skarpetki', component: MainPageComponent},
            {path: 'nakrycia-glowy', component: MainPageComponent},
            {path: 'etui-i-pokrowce', component: MainPageComponent},
            {path: 'torby-i-nerki', component: MainPageComponent},
            {path: 'muchy-krawaty-poszetki', component: MainPageComponent},
            {path: 'okulary', component: MainPageComponent},
          ]}
      ]},
    {path: 'ona', component: MainPageComponent, children: [
        {path: 'moda', component: MainPageComponent, children: [
            {path: 't-shirty', component: MainPageComponent},
            {path: 'bluzy', component: MainPageComponent},
            {path: 'swetry', component: MainPageComponent},
            {path: 'żakiety', component: MainPageComponent},
            {path: 'spodnie', component: MainPageComponent},
            {path: 'spodnice', component: MainPageComponent},
            {path: 'kurtki-i-plaszcze', component: MainPageComponent},
            {path: 'bielizna', component: MainPageComponent},
          ]},
        {path: 'bizuteria', component: MainPageComponent, children: [
            {path: 'naszyjniki', component: MainPageComponent},
            {path: 'pierscionki', component: MainPageComponent},
            {path: 'bransoletki', component: MainPageComponent},
            {path: 'brozki', component: MainPageComponent},
            {path: 'zawieszki-i-wisiorki', component: MainPageComponent},
            {path: 'zestawy', component: MainPageComponent},
            {path: 'inne', component: MainPageComponent},
          ]},
        {path: 'dodatki', component: MainPageComponent, children: [
            {path: 'paski', component: MainPageComponent},
            {path: 'zegarki', component: MainPageComponent},
            {path: 'nakrycia-glowy', component: MainPageComponent},
            {path: 'torby-i-nerki', component: MainPageComponent},
            {path: 'chusty-szaliki', component: MainPageComponent},
            {path: 'rekawiczki', component: MainPageComponent},
            {path: 'skarpetki', component: MainPageComponent},
            {path: 'okulary', component: MainPageComponent},
            {path: 'inne', component: MainPageComponent},

          ]}
      ]},
    {path: 'kosmetyki', component: MainPageComponent, children: [
        {path: 'do-wlosow', component: MainPageComponent, children: [
            {path: 'szampony', component: MainPageComponent},
            {path: 'odzywki', component: MainPageComponent},
            {path: 'oleje', component: MainPageComponent},
          ]},
        {path: 'do-twarzy', component: MainPageComponent, children: [
            {path: 'kremy', component: MainPageComponent},
            {path: 'maski', component: MainPageComponent},
            {path: 'oleje', component: MainPageComponent},
            {path: 'mydla', component: MainPageComponent},
          ]},
        {path: 'do-ciala', component: MainPageComponent, children: [
            {path: 'kremy', component: MainPageComponent},
            {path: 'odzywki', component: MainPageComponent},
            {path: 'peelingi', component: MainPageComponent},
            {path: 'oleje', component: MainPageComponent},
            {path: 'mydla', component: MainPageComponent},
          ]}
      ]},
    {path: 'dom-i-ogrod', component: MainPageComponent, children: [
        {path: 'kuchnia', component: MainPageComponent, children: [
            {path: 'noze-kuchenne', component: MainPageComponent},
            {path: 'miski-talerze-kubki-garnki', component: MainPageComponent},
            {path: 'deski-do-krojenia', component: MainPageComponent},
          ]},
        {path: 'lazienka', component: MainPageComponent, children: [
            {path: 'tekstylia', component: MainPageComponent},
            {path: 'przechowywanie', component: MainPageComponent},
            {path: 'akcesoria', component: MainPageComponent},
            {path: 'inne', component: MainPageComponent},
          ]},
        {path: 'salon', component: MainPageComponent, children: [
            {path: 'stoly', component: MainPageComponent},
            {path: 'krzesla', component: MainPageComponent},
            {path: 'fotele-pufy', component: MainPageComponent},
            {path: 'kanapy', component: MainPageComponent},
            {path: 'regaly', component: MainPageComponent},
            {path: 'stoliki-kawowe', component: MainPageComponent},
            {path: 'komody', component: MainPageComponent},
          ]},
          {path: 'oswietlenie', component: MainPageComponent, children: [
            {path: 'sufitowe', component: MainPageComponent},
            {path: 'scienne', component: MainPageComponent},
            {path: 'stojace', component: MainPageComponent},
          ]},
          {path: 'ozdoby', component: MainPageComponent, children: [
            {path: 'ramy', component: MainPageComponent},
            {path: 'swiece', component: MainPageComponent},
            {path: 'zegary', component: MainPageComponent},
            {path: 'obrazy-i-plakaty', component: MainPageComponent},
            {path: 'donice-i-wazony', component: MainPageComponent},
            {path: 'dywany-dywaniki', component: MainPageComponent},
            {path: 'rzezby', component: MainPageComponent},
            {path: 'inne', component: MainPageComponent},
          ]}
      ]},
    {path: 'zwierzeta', component: MainPageComponent, children: [
        {path: 'legowiska-dla-zwierzat', component: MainPageComponent},
        {path: 'obroze-i-smycze-dla-zwierzat', component: MainPageComponent},
        {path: 'zabawki-dla-zwierzat', component: MainPageComponent},
        {path: 'ubranka-dla-zwierzat', component: MainPageComponent},
        {path: 'inne', component: MainPageComponent},
      ]},
    {path: 'akcesoria', component: MainPageComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
