import {Component, OnInit} from '@angular/core';
import {BookService} from '../../../services/book.service';
import {IBook} from '../../IBook';
import {HttpResult} from '../../../_core/HttpResult';

@Component({
  selector: 'app-book-list-unread',
  templateUrl: './book-list-unread.component.html',
  styleUrls: ['./book-list-unread.component.css']
})
export class BookListUnreadComponent implements OnInit {

  books: IBook[];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAll().subscribe((res: IBook[]) => {
      for (const book of res) {
        if (book.read == true) {
          this.books.push(book);
        }
      }
    });
  }

  // delete(id: number) {
  //   if (confirm('Are you sure to delete this book?')) {
  //     this.bookService.destroy(id).subscribe((res: IBook) => {
  //       if (res.read == false) {
  //         this.getAllBook();
  //       }
  //     });
  //   }
  // }
}
