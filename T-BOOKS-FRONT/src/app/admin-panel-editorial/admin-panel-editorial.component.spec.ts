import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelEditorialComponent } from './admin-panel-editorial.component';

describe('AdminPanelEditorialComponent', () => {
  let component: AdminPanelEditorialComponent;
  let fixture: ComponentFixture<AdminPanelEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelEditorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPanelEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
