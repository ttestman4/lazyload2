import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SampleDialog1Component } from './sample-dialog1/sample-dialog1.component';
import { Wiz1hostComponent } from './wizard1/wizard1.module';

@Component({
  selector: 'spa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazyload2';

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(SampleDialog1Component, {
      width: '250px',
    });
  }

  openWizard1(): void {
    this.dialog.open(Wiz1hostComponent, {
      width: '250px',
    });
  }
}
