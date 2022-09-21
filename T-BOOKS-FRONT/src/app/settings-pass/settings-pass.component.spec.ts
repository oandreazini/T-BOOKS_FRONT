import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPassComponent } from './settings-pass.component';

describe('SettingsPassComponent', () => {
  let component: SettingsPassComponent;
  let fixture: ComponentFixture<SettingsPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
