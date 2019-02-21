import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Wiz1hostComponent } from './wiz1host/wiz1host.component';
const routes: Routes = [
  {
    path: 'wiz1host',
    component: Wiz1hostComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'wiz1host',
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class Wizard1RoutingModule { }
