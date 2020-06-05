import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComparsionChartsComponent } from './user-comparsion-charts.component';

describe('UserComparsionChartsComponent', () => {
  let component: UserComparsionChartsComponent;
  let fixture: ComponentFixture<UserComparsionChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComparsionChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComparsionChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
