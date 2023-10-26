import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// mis componentes
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';
import { VisualizarDisenioComponent } from './shared/visualizar-disenio/visualizar-disenio.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '404', component: Page404Component},
    { path: 'disenio', component: VisualizarDisenioComponent},
    // { path: 'disenio:imgSrc', component: VisualizarDisenioComponent},
    { path: '', redirectTo: 'home', pathMatch: "full"},
    // { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
