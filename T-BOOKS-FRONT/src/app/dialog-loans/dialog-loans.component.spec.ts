import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoansComponent } from './dialog-loans.component';

describe('DialogLoansComponent', () => {
  let component: DialogLoansComponent;
  let fixture: ComponentFixture<DialogLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLoansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
