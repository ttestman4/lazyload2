import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Wiz1step1hostComponent } from './wiz1step1host/wiz1step1host.component';
const routes: Routes = [
  {
    path: 'wiz1step1host',
    component: Wiz1step1hostComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'wiz1step1host',
  }
];

@NgModule({
  declarations: [Wiz1step1hostComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Wiz1step1RoutingModule { }
