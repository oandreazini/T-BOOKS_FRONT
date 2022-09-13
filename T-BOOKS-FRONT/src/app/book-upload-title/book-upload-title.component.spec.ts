import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUploadTitleComponent } from './book-upload-title.component';

describe('BookUploadTitleComponent', () => {
  let component: BookUploadTitleComponent;
  let fixture: ComponentFixture<BookUploadTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookUploadTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookUploadTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
