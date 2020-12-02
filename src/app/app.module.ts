import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AnnouncmentsViewComponent } from './announcments-view/announcments-view.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SidebarCategoriesComponent } from './components/sidebar-categories/sidebar-categories.component';
import { PersonalInfoEditPageComponent } from './personal-info-edit-page/personal-info-edit-page.component';
import { ProfilePageHeaderComponent } from './profile-page-header/profile-page-header.component';
import { ProfileContactbarComponent } from './profile-contactbar/profile-contactbar.component';
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
    ProfileAboutMeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
