import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Wiz1hostComponent } from './wiz1host/wiz1host.component';
const routes: Routes = [
  {
    path: 'wiz1host',
    component: Wiz1hostComponent,
    children: [
      {
        path: 'step1',
        loadChildren: './wiz1step1/wiz1step1.module#Wiz1step1Module'
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'step1',
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'wiz1host',
  }
];

@NgModule({
  declarations: [Wiz1hostComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class Wizard1RoutingModule { }
