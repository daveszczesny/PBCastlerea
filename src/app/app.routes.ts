import { provideRouter } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';



export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'services/:id', component: ServiceDetailComponent},
    {path: '**', component:PageNotFoundComponent},
];
