import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SingleAnnouncementViewComponent} from './components/single-announcement-view/single-announcement-view.component';
import {PhotosViewComponent} from './components/single-announcement-view/photos-view/photos-view.component';
import {AnnouncementInfoComponent} from './components/single-announcement-view/announcement-info/announcement-info.component';
import {AnnouncementDetailsComponent} from './components/single-announcement-view/announcement-details/announcement-details.component';
import {LeftSideViewComponent} from './components/single-announcement-view/left-side-view/left-side-view.component';
import {LocalizationInfoComponent} from './components/single-announcement-view/localization-info/localization-info.component';
import {AnnouncementsViewComponent} from './components/announcements-view/announcements-view.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {SidebarCategoriesComponent} from './components/sidebar-categories/sidebar-categories.component';
import {PersonalInfoEditPageComponent} from './components/personal-info-edit-page/personal-info-edit-page.component';
import {ProfilePageHeaderComponent} from './components/profile-page/profile-page-header/profile-page-header.component';
import {ProfileContactbarComponent} from './components/profile-page/profile-contactbar/profile-contactbar.component';
import {ProfileAboutMeComponent} from './components/profile-page/profile-about-me/profile-about-me.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AddingFormComponent } from './components/adding-announcement-page/adding-form/adding-form.component';
import { AddingAnnouncementPageComponent } from './components/adding-announcement-page/adding-announcement-page.component';
import {AppRoutingModule} from './app-routing.module';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { CategoriesPageComponent } from './components/categories/categories-page/categories-page.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AnnouncementsViewComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesComponent,
    SidebarCategoriesComponent,
    PersonalInfoEditPageComponent,
    ProfilePageHeaderComponent,
    ProfileContactbarComponent,
    ProfileAboutMeComponent,
    SingleAnnouncementViewComponent,
    PhotosViewComponent,
    AnnouncementInfoComponent,
    AnnouncementDetailsComponent,
    LeftSideViewComponent,
    LocalizationInfoComponent,
    MainPageComponent,
    AddingFormComponent,
    AddingAnnouncementPageComponent,
    ProfilePageComponent,
    CategoriesPageComponent,
    AddingAnnouncementPageComponent,
    SidebarMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
