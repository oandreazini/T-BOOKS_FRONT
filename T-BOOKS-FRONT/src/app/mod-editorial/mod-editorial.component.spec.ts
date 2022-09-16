import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModEditorialComponent } from './mod-editorial.component';

describe('ModEditorialComponent', () => {
  let component: ModEditorialComponent;
  let fixture: ComponentFixture<ModEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModEditorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
