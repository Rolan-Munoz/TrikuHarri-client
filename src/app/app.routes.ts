import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { ProjectComponent } from './components/project/project.component';
import { WaterComponent } from './components/categories/water/water.component';
import { EnergyComponent } from './components/categories/energy/energy.component';
import { UrbanismComponent } from './components/categories/urbanism/urbanism.component';
import { EnvironmentComponent } from './components/categories/environment/environment.component';
import { MobilityComponent } from './components/categories/mobility/mobility.component';
import { InfraestructureComponent } from './components/categories/infraestructure/infraestructure.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { TeamComponent } from './components/team/team.component';
import { MetodologyComponent } from './components/metodology/metodology.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'news', component: NewsComponent},
    {path: 'projects/:id', component: ProjectDetailsComponent},
    {path: 'projects', component: ProjectComponent},
    {path: 'water', component: WaterComponent},
    {path: 'energy', component: EnergyComponent},
    {path: 'urbanism', component: UrbanismComponent},
    {path: 'environment', component: EnvironmentComponent},
    {path: 'mobility', component: MobilityComponent},
    {path: 'infraestructure', component: InfraestructureComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'team', component: TeamComponent},
    {path: 'metodology', component: MetodologyComponent}
];
