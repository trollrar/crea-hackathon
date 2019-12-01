import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressorStatesComponent } from './compressor-states.component';

describe('CompressorStatesComponent', () => {
  let component: CompressorStatesComponent;
  let fixture: ComponentFixture<CompressorStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompressorStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompressorStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
