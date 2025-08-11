import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { RouteMiddlewareGuard } from './guards/route-middleware.guard';

const routes: Routes = [
  {
    path: '',
    component: AboutMeComponent,
    canActivate: [RouteMiddlewareGuard]
  },
  {
    path: 'resume',
    component: ResumeComponent,
    canActivate: [RouteMiddlewareGuard]
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    canActivate: [RouteMiddlewareGuard]
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [RouteMiddlewareGuard]
  },
  {
    path: '**',
    redirectTo: '',
    canActivate: [RouteMiddlewareGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
