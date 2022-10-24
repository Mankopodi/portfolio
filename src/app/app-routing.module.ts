import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Cpmponent/about/about.component';
import { ContactComponent } from './Cpmponent/contact/contact.component';
import { HomeComponent } from './Cpmponent/home/home.component';
import { NavbarComponent } from './Cpmponent/navbar/navbar.component';
import { PortfolioComponent } from './Cpmponent/portfolio/portfolio.component';
import { ResumeComponent } from './Cpmponent/resume/resume.component';

const routes: Routes = [
  {path: 'navbar' ,component: NavbarComponent},
  {path: 'home' ,component: HomeComponent},
  {path: 'about' ,component: AboutComponent},
  {path: 'resume' ,component: ResumeComponent},
  {path: 'portfolio' ,component: PortfolioComponent},
  {path: 'contact' ,component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
