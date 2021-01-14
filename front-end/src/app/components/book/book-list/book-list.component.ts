import {Component, OnInit} from '@angular/core';
import {BookService} from '../../../services/book.service';
import {IBook} from '../../IBook';
// import {HttpResult} from '../../../_core/HttpResult';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: IBook[]=[] ;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAll().subscribe((res: IBook[]) => {
      console.log(res)
      for (const book of res) {
        if (book.read == false) {
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
