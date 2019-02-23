import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wiz1step1hostComponent } from './wiz1step1host.component';

describe('Wiz1step1hostComponent', () => {
  let component: Wiz1step1hostComponent;
  let fixture: ComponentFixture<Wiz1step1hostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wiz1step1hostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wiz1step1hostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
