import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualOutputComponent } from './visual-output.component';

describe('VisualOutputComponent', () => {
  let component: VisualOutputComponent;
  let fixture: ComponentFixture<VisualOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
