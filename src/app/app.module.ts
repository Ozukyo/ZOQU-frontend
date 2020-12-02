import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SingleAnnouncementViewComponent} from './single-announcement-view/single-announcement-view.component';
import {PhotosViewComponent} from './single-announcement-view/photos-view/photos-view.component';
import {AnnouncementInfoComponent} from './single-announcement-view/announcement-info/announcement-info.component';
import {AnnouncementDetailsComponent} from './single-announcement-view/announcement-details/announcement-details.component';
import {LeftSideViewComponent} from './single-announcement-view/left-side-view/left-side-view.component';
import {LocalizationInfoComponent} from './single-announcement-view/localization-info/localization-info.component';
import {AnnouncmentsViewComponent} from './announcments-view/announcments-view.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {SidebarCategoriesComponent} from './components/sidebar-categories/sidebar-categories.component';
import {PersonalInfoEditPageComponent} from './personal-info-edit-page/personal-info-edit-page.component';
import {ProfilePageHeaderComponent} from './profile-page-header/profile-page-header.component';
import {ProfileContactbarComponent} from './profile-contactbar/profile-contactbar.component';
import {ProfileAboutMeComponent} from './profile-about-me/profile-about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AnnouncmentsViewComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesComponent,
    SidebarCategoriesComponent,
    PersonalInfoEditPageComponent,
    ProfilePageHeaderComponent,
    ProfileContactbarComponent,
    ProfileAboutMeComponent,
    FooterComponent,
    SingleAnnouncementViewComponent,
    PhotosViewComponent,
    AnnouncementInfoComponent,
    AnnouncementDetailsComponent,
    LeftSideViewComponent,
    LocalizationInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
