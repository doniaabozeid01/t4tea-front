import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeawareComponent } from './teaware.component';

describe('TeawareComponent', () => {
  let component: TeawareComponent;
  let fixture: ComponentFixture<TeawareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeawareComponent]
    });
    fixture = TestBed.createComponent(TeawareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
