import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushBookComponent } from './push-book.component';

describe('PushBookComponent', () => {
  let component: PushBookComponent;
  let fixture: ComponentFixture<PushBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
