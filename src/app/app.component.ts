import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SampleDialog1Component } from './sample-dialog1/sample-dialog1.component';

@Component({
  selector: 'spa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazyload2';

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(SampleDialog1Component, {
      width: '250px',
    });
  }
}
