import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'spa-sample-dialog1',
  templateUrl: './sample-dialog1.component.html',
  styleUrls: ['./sample-dialog1.component.scss']
})
export class SampleDialog1Component implements OnInit ,OnDestroy {
  static count = 0;
  dialogNumber = 0;
  constructor() { }

  ngOnInit() {
    SampleDialog1Component.count += 1;
    this.dialogNumber = SampleDialog1Component.count;
  }

  ngOnDestroy() {
    SampleDialog1Component.count -= 1;

  }
}
