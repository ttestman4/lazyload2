import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Wizard1RoutingModule, Wiz1hostComponent } from './wizard1-routing.module';
export { Wiz1hostComponent };

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Wizard1RoutingModule,
  ],
})
export class Wizard1Module { }
