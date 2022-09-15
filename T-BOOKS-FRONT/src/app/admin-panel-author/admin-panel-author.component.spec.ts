import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelAuthorComponent } from './admin-panel-author.component';

describe('AdminPanelAuthorComponent', () => {
  let component: AdminPanelAuthorComponent;
  let fixture: ComponentFixture<AdminPanelAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPanelAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
