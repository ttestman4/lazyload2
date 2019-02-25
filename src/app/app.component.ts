import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SampleDialog1Component } from './sample-dialog1/sample-dialog1.component';

@Component({
  selector: 'spa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'lazyload2';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    // this.openWizard1();
  }

  openDialog(): void {
    this.dialog.open(SampleDialog1Component, {
      width: '250px',
    });
  }

  openWizard1(): void {
    this.dialog.open(SampleDialog1Component, {
      width: '250px',
    });
  }
}
