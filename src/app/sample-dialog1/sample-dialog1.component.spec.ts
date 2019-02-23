import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDialog1Component } from './sample-dialog1.component';

describe('SampleDialog1Component', () => {
  let component: SampleDialog1Component;
  let fixture: ComponentFixture<SampleDialog1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleDialog1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDialog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
