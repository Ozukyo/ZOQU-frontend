import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SingleAnnouncementViewComponent } from './single-announcement-view/single-announcement-view.component';
import { PhotosViewComponent } from './single-announcement-view/photos-view/photos-view.component';
import { AnnouncementInfoComponent } from './single-announcement-view/announcement-info/announcement-info.component';
import {AnnouncementDetailsComponent} from './single-announcement-view/announcement-details/announcement-details.component';
import { LeftSideViewComponent } from './single-announcement-view/left-side-view/left-side-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SingleAnnouncementViewComponent,
    PhotosViewComponent,
    AnnouncementInfoComponent,
    AnnouncementDetailsComponent,
    LeftSideViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
