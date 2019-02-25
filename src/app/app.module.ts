import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleDialog1Component } from './sample-dialog1/sample-dialog1.component';
import { Wizard1Module } from './wizard1/wizard1.module';
@NgModule({
  declarations: [
    AppComponent,
    SampleDialog1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    Wizard1Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SampleDialog1Component]
})
export class AppModule { }
