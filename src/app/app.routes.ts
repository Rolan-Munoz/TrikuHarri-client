import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'news', component: NewsComponent}
];
