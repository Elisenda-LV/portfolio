import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

export const routes: Routes = [

  {
    path: '',
    title: 'portfolio',
    data: { breadcrumb: 'Home'},
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),

  },
  {
    path: 'aboutme',
    title: 'about me',
    data: { breadcrumb: 'about me'},
    loadComponent: () => import('./components/about-me/about-me.component').then(c => c.AboutMeComponent),

  },
  {
    path: 'cv',
    title: 'cv',
    data: { breadcrumb: 'cv'},
    loadComponent: () => import('./components/cv/cv.component').then(c => c.CvComponent),

  },
  {
    path: 'projects',
    title: 'projects',
    data: { breadcrumb: 'projects'},
    loadComponent: () => import('./components/projects/projects.component').then(c => c.ProjectsComponent),

  },

];
