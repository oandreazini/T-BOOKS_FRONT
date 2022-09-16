import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModAuthorComponent } from './mod-author.component';

describe('ModAuthorComponent', () => {
  let component: ModAuthorComponent;
  let fixture: ComponentFixture<ModAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
