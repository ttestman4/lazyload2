import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wiz1hostComponent } from './wiz1host.component';

describe('Wiz1hostComponent', () => {
  let component: Wiz1hostComponent;
  let fixture: ComponentFixture<Wiz1hostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wiz1hostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wiz1hostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
