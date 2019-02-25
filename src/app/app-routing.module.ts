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
    path: '2home',
    component: DashboardComponent,
    outlet: 'mainoutlet'
  },
  {
    path: '2wiz1',
    loadChildren: './wizard1/wizard1.module#Wizard1Module',
    outlet: 'mainoutlet'
  },
  {
    path: '',
    pathMatch: 'full',
    // redirectTo: '/wiz1/wiz1host/step1/wiz1step1host(mainoutlet:2wiz1/wiz1host/step1/wiz1step1host)'
    redirectTo: '/wiz1/wiz1host/(step1/wiz1step1host//wiz1outlet:2step1/wiz1step1host)'
    // redirectTo: 'wiz1'
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
