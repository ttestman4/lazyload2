import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
export { DashboardComponent };

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent],
})
export class HomeModule { }
