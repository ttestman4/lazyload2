import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent, HomeModule } from './home/home.module';
const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'wiz1',
    loadChildren: './wizard1/wizard1.module#Wizard1Module',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'wiz1'
  }
];

@NgModule({
  imports: [
    HomeModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
