import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalStatesComponent } from './digital-states.component';

describe('DigitalStatesComponent', () => {
  let component: DigitalStatesComponent;
  let fixture: ComponentFixture<DigitalStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
