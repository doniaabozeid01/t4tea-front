import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeawarePageComponent } from './teaware-page.component';

describe('TeawarePageComponent', () => {
  let component: TeawarePageComponent;
  let fixture: ComponentFixture<TeawarePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeawarePageComponent]
    });
    fixture = TestBed.createComponent(TeawarePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
