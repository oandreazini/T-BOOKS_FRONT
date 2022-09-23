import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModBooksComponent } from './mod-books.component';

describe('ModBooksComponent', () => {
  let component: ModBooksComponent;
  let fixture: ComponentFixture<ModBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
