import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBooksComponent } from './dialog-books.component';

describe('DialogBooksComponent', () => {
  let component: DialogBooksComponent;
  let fixture: ComponentFixture<DialogBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
