import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelBooksComponent } from './admin-panel-books.component';

describe('AdminPanelBooksComponent', () => {
  let component: AdminPanelBooksComponent;
  let fixture: ComponentFixture<AdminPanelBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPanelBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
