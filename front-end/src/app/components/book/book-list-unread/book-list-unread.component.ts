import {Component, OnInit} from '@angular/core';
import {BookService} from '../../../services/book.service';
import {IBook} from '../../IBook';
import {HttpResult} from '../../../_core/HttpResult';

@Component({
  selector: 'app-book-list-unread',
  templateUrl: './book-list-unread.component.html',
  styleUrls: ['./book-list.component-unread.css']
})
export class BookListUnreadComponent implements OnInit {

  books: IBook[] | undefined;
  message: string | undefined;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook(): void {
    this.bookService.getAll().subscribe((res: HttpResult) => {
      if (res.status == 'success') {
        console.log('get all books unread successful!');
        this.books = res.data;
      } else {
        console.log('cannot get any books!');
      }
    });
  }

  delete(id: number) {
    if (confirm('Are you sure to delete this book?')) {
      this.bookService.destroy(id).subscribe((res: HttpResult) => {
        if (res.status == 'success') {
          this.getAllBook();
          this.message = res.message;
        }
      });
    }
  }

}
