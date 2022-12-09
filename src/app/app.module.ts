import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MYSkillsComponent } from './my-skills/my-skills.component';
import { MyWorkComponent } from './my-work/my-work.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    MYSkillsComponent,
    MyWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
