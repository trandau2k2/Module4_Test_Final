import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListUnreadComponent } from './book-list-unread.component';

describe('BookListUnreadComponent', () => {
  let component: BookListUnreadComponent;
  let fixture: ComponentFixture<BookListUnreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListUnreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListUnreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
