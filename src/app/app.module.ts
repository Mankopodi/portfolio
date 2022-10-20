import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Cpmponent/home/home.component';
import { AboutComponent } from './Cpmponent/about/about.component';
import { ResumeComponent } from './Cpmponent/resume/resume.component';
import { PortfolioComponent } from './Cpmponent/portfolio/portfolio.component';
import { ContactComponent } from './Cpmponent/contact/contact.component';
import { NavbarComponent } from './Cpmponent/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
