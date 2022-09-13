import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelLoanComponent } from './admin-panel-loan.component';

describe('AdminPanelLoanComponent', () => {
  let component: AdminPanelLoanComponent;
  let fixture: ComponentFixture<AdminPanelLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelLoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPanelLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
