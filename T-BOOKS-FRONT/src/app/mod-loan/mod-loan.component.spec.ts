import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModLoanComponent } from './mod-loan.component';

describe('ModLoanComponent', () => {
  let component: ModLoanComponent;
  let fixture: ComponentFixture<ModLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModLoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
