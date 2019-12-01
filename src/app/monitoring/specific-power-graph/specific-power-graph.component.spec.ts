import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificPowerGraphComponent } from './specific-power-graph.component';

describe('SpecificPowerGraphComponent', () => {
  let component: SpecificPowerGraphComponent;
  let fixture: ComponentFixture<SpecificPowerGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificPowerGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificPowerGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
