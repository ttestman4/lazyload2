import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Wiz1hostComponent } from './wiz1host/wiz1host.component';
import { Wizard1RoutingModule } from './wizard1-routing.module';
export { Wiz1hostComponent };

@NgModule({
  declarations: [Wiz1hostComponent],
  imports: [
    CommonModule,
    Wizard1RoutingModule
  ],
})
export class Wizard1Module { }
