import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMybooksComponent } from './dialog-mybooks.component';

describe('DialogMybooksComponent', () => {
  let component: DialogMybooksComponent;
  let fixture: ComponentFixture<DialogMybooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMybooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogMybooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
