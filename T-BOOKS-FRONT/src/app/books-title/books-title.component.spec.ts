import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksTitleComponent } from './books-title.component';

describe('BooksTitleComponent', () => {
  let component: BooksTitleComponent;
  let fixture: ComponentFixture<BooksTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
