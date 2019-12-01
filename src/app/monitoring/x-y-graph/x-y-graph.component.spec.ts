import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XYGraphComponent } from './x-y-graph.component';

describe('XYGraphComponent', () => {
  let component: XYGraphComponent;
  let fixture: ComponentFixture<XYGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XYGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XYGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
