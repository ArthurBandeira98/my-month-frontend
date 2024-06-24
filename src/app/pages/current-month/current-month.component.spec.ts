import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMonthComponent } from './current-month.component';

describe('CurrentMonthComponent', () => {
  let component: CurrentMonthComponent;
  let fixture: ComponentFixture<CurrentMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentMonthComponent]
    });
    fixture = TestBed.createComponent(CurrentMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
